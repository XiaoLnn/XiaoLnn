
# 架构级优化

## 完成
- app.js 改为模块加载入口
- 原业务代码移动到 core/app-core.js，降低入口复杂度
- 增加 modules 目录，为播放器/搜索/歌词等拆分预留
- 非关键模块使用 requestIdleCallback 延迟加载

## 下一阶段
- 将 app-core.js 拆成 player/search/lyrics/playlist/state/store
- 引入 ES Module 状态管理
- 按页面功能动态 import
