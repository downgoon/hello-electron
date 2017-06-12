# hello-electron

## index.html

刚开始，只有一个 ``index.html``页面，显示``Hello World``：

``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Hello World!</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>

</html>
```

这个页面可在本地直接用浏览器打开，提交``c1-index.html``。

## server.js

除了本地直接用浏览器打开``index.html``，我们还可以用``node.js``写一个web server，以便在浏览器中输入：http://127.0.0.1:8080/index.html

``` javascript

var http = require('http');
var fs = require('fs');

http.createServer( function (request, response) {

  console.log('request comming: ' + request.url);

  fs.readFile('index.html', function (err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data.toString());
    response.end();
  });

}).listen(8080);

console.log('server running at http://127.0.0.1:8080/');
```

这段代码逻辑比较简单，加载了两个模块：``http``和``fs``，前者是Web服务器，后者是文件系统。用``http``在8080端口启动一个Web服务，对任何请求，都读取``index.html``并写入客户端做HTTP响应（文件读取是异步的）。


运行 ``server.js``：

``` bash
$ node server.js
server running at http://127.0.0.1:8080/
request comming: /index.html
```

---

# 参考资料

- [用node写简易的静态Web服务器](http://www.runoob.com/nodejs/nodejs-web-module.html)
