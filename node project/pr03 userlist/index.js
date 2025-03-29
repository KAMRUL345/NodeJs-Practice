const http = require("http");

const users = [
  { id: 1, name: "Fahim", email: "fahim@gmail.com" },
  { id: 2, name: "Xarif", email: "xarif@gmail.com" },
  { id: 3, name: "Karim", email: "karim@gmail.com" },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(JSON.stringify(users));
});

server.listen(3000, () => {
  console.log("Successfully Listening on port 3000");
});
