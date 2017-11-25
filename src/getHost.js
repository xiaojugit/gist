// 原生JavaScript获取域名主机
function getHost(url) {
  var host = 'null';
  if (typeof url == 'undefined' || url == null) {
    url = window.location.href;
  }
  var regex = /^\w+\:\/\/([^\/]*).*/;
  var match = url.match(regex);
  var exec = regex.exec(url);
  if (typeof match != 'undefined' && null != match) {
    host = match[1];
  }
  return host;
}
