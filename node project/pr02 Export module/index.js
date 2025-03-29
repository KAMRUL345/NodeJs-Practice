let http = require("http");
let dt = require("./exportModule");

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("The date and time are cureently:" + dt.myDateTime());
  res.end();
});

server.listen(8080);
