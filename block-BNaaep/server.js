const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(handlerServer);

function handlerServer(req, res) {
  console.log(req.url, req.method);
  if (req.url.match(".css$")) {
    res.writeHead(200, {
      "Content-Type": "text/css",
    });
    fs.createReadStream(path.join(__dirname, req.url)).pipe(res);
  }
  if (req.url.match(".js$")) {
    res.writeHead(200, {
      "Content-Type": "text/js",
    });
    fs.createReadStream(path.join(__dirname, req.url)).pipe(res);
  }
  if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    fs.createReadStream("contact.html").pipe(res);
  }
  if (req.url === "/form" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      data = JSON.parse(data);
      const response = {
        success: true,
        data,
      };
      res.end(JSON.stringify(response));
    });
  }
  if (req.url === "/user" && req.method === "PUT") {
    const response = {
      success: true,
      data: {
        message: "put req on user",
      },
    };
    res.end(JSON.stringify(response));
  }
}

server.listen(5000, "localhost", () => {
  console.log("server running");
});
