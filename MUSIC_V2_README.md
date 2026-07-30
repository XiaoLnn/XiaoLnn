# Nie Music 优化版

这是一个为 GitHub Pages + Cloudflare Workers/D1 设计的聚合音乐播放器。前端是纯静态文件，不需要构建工具；Cloudflare Worker 负责隐藏 API Key、处理 CORS、聚合第三方接口，并把每个匿名用户的歌单分开存入 D1。

## 已实现

- 单文件 HTML 拆分为独立 HTML、CSS、ES Module、Service Worker。
- 首页改为 QQ 音乐热榜，不再把“搜索结果”作为首页音乐库入口。
- 搜索结束后不会自动播放。
- 每条搜索结果支持“立即播放”“下一首播放”“加入歌单”。
- 播放结束自动播放队列下一首。
- 支持网易云、QQ 音乐分享链接导入歌单。
- 原有播放接口优先：网易云 `cyapi netease.php`、QQ `tang music_open_api.php`、酷我、JOOX；导入接口提供的 URL 只作为回退地址。
- Cloudflare D1 按 `user_id` 隔离用户、歌单和歌单歌曲。
- API Key 保存在 Worker Secret，不写入 GitHub Pages 源码。
- 桌面、平板、手机分别优化：平板为图标侧栏 + 两列内容 + 抽屉队列；手机为底部导航 + 迷你播放器。
- Service Worker 缓存静态外壳，后续访问加载更快。

## 项目结构

```text
.
├── index.html
├── manifest.webmanifest
├── sw.js
├── assets/
│   ├── css/app.css
│   ├── icons/icon.svg
│   └── js/
│       ├── config.js
│       ├── app.js
│       ├── api.js
│       ├── player.js
│       ├── store.js
│       └── ui.js
├── cloudflare/
│   ├── src/index.js
│   ├── migrations/0001_initial.sql
│   ├── package.json
│   └── wrangler.toml
└── .github/workflows/deploy-pages.yml
```

## 一、部署 Cloudflare Worker + D1

需要 Node.js 20 或更高版本。

```bash
cd cloudflare
npm install
npx wrangler login
npx wrangler d1 create nie-music
```

命令会返回 D1 的 `database_id`。把它填入 `cloudflare/wrangler.toml`：

```toml
database_id = "你的 D1 database_id"
```

把 `ALLOWED_ORIGINS` 改成你的 GitHub Pages 地址和自定义域名：

```toml
ALLOWED_ORIGINS = "https://你的用户名.github.io,https://你的域名.example"
```

`METING_ENDPOINT` 默认使用你提供的地址。如果服务方迁移域名，只需在 `wrangler.toml` 修改这一项，不需要改前端或 Worker 代码。

应用数据库迁移：

```bash
npm run db:migrate:remote
```

保存 cyapi 的 API Key。命令执行后，在终端提示中粘贴 Key；不要把 Key 写进仓库：

```bash
npx wrangler secret put CY_API_KEY
```

JOOX 为可选源；需要时再设置：

```bash
npx wrangler secret put JOOX_TOKEN
```

部署：

```bash
npm run deploy
```

记录 Worker 地址，例如：

```text
https://nie-music-api.<你的 Cloudflare 子域>.workers.dev
```

## 二、连接前端

编辑 `assets/js/config.js`：

```js
window.NIE_MUSIC_CONFIG = Object.freeze({
  WORKER_BASE_URL: "https://nie-music-api.<你的 Cloudflare 子域>.workers.dev",
  APP_NAME: "Nie Music",
  DEFAULT_SEARCH_LIMIT: 12
});
```

## 三、部署 GitHub Pages

1. 把整个目录提交到 GitHub 仓库的 `main` 分支。
2. 打开仓库 **Settings → Pages**。
3. Source 选择 **GitHub Actions**。
4. 推送后，`.github/workflows/deploy-pages.yml` 会只发布静态前端文件，不会把 Worker 作为网页内容发布。

本地预览：

```bash
python -m http.server 8080
```

然后打开 `http://localhost:8080`。本地地址已经预置在 Worker 的 CORS 示例配置中。

## 用户隔离说明

第一次访问时，Worker 会创建随机 `user_id` 和高强度 token。浏览器只在请求中携带自己的凭证；D1 的所有歌单查询和修改都同时按 `user_id` 过滤。数据库还在 `playlist_tracks` 表中重复保存 `user_id`，避免跨用户关联。

这是“匿名设备账户”方案：清除浏览器站点数据会丢失本机凭证，但不会删除 D1 里的数据。需要真正的跨设备登录时，可以再接入 GitHub OAuth、Cloudflare Access 或邮箱验证码，并把当前匿名用户迁移到登录账户。

## 接口说明

Worker 路由：

- `GET /api/hot`：获取 QQ 音乐热榜列表。
- `GET /api/hot?id=...`：获取指定热榜歌曲。
- `GET /api/search?source=qq&q=...&limit=12`：多源搜索的单源请求。
- `POST /api/resolve`：按原播放接口优先解析歌曲地址。
- `POST /api/import`：识别网易云或 QQ 分享链接、导入并保存。
- `GET/POST/PUT/DELETE /api/playlists`：D1 歌单管理。
- `GET/POST /api/session`：匿名用户会话。

## 上线前建议

- 将 `ALLOWED_ORIGINS` 限制为你的正式域名，不要长期使用 `*`。
- 为 Worker 配置自定义域名，避免以后更换 `workers.dev` 地址。
- 第三方音乐接口可能改变返回格式或可用性；Worker 的解析器已兼容常见字段，但仍应定期检查日志。
- 音乐版权与播放权限由对应平台及接口提供方决定，请只在获授权的场景使用。
