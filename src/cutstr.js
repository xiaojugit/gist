// 原生JavaScript实现字符串长度截取
function cutstr(str, len) {
  let temp;
  let icount = 0;
  let patrn = /[^\x00-\xff]/;
  let strre = '';
  for (let i = 0, l = str.length; i < l; i++) {
    if (icount < len) {
      temp = str.substr(i, 1);
      if (patrn.test(temp) === false) {
        icount = icount + 1;
      } else {
        icount = icount + 2;
      }
      strre += temp;
    } else {
      break;
    }
  }
  return strre + '...'
}
