// 原生JavaScript判断是否Touch屏幕
function isTouchScreen() {
  return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
}
