# Code optimization changes

- Added idle/debounce runtime helpers to reduce main-thread bursts.
- Throttled lyric highlight rendering through requestAnimationFrame.
- Debounced search-clear rendering to avoid repeated DOM updates.
- Kept mobile GPU optimizations from the previous version.
