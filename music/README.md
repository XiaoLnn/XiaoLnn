# Nie Music

一个无需前端构建步骤的聚合音乐播放器。静态资源位于 `music/`，QQ 歌单跨域代理位于仓库根目录的 `functions/`。

## 目录结构

```text
music/
├─ index.html              页面结构与首屏状态引导
├─ assets/
│  ├─ css/app.css          页面样式
│  ├─ js/app.js            搜索、播放、歌词与交互逻辑
│  └─ images/              站点静态图片
└─ scripts/                仓库维护脚本
functions/
└─ api/qq-playlist.js      Cloudflare Pages 同源代理
_routes.json               仅让 /api/* 进入 Pages Functions
```

## 本地运行

请通过静态 HTTP 服务器访问，避免直接打开 `file://` 地址导致跨域行为与线上环境不一致。

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 性能约定

- 首屏使用系统字体，避免网络字体造成布局偏移。
- 第三方拼音组件仅在开启歌词辅助功能时加载。
- 列表缩略图请求与显示尺寸匹配；播放器大封面仍按需使用高分辨率资源。
- CSS 与 JavaScript 独立部署，以利用浏览器缓存。

## QQ 歌单导入代理

QQ 歌单接口不允许浏览器跨域直连，项目通过 Cloudflare Pages Function `/api/qq-playlist` 同源转发。部署前在 Cloudflare Pages 项目的“设置 → 变量和机密”中添加加密机密：

```text
QQ_MUSIC_API_KEY=<你的 cyapi API Key>
```

不要把 API Key 写入 `functions/`、提交到 Git，或放进普通明文环境变量。`_routes.json` 只让 `/api/*` 进入 Functions，其余静态资源仍直接由 Pages 提供。
