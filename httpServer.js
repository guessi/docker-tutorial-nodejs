'use strict';

var os = require("os");
var http = require("http");

console.log("[DEMO] Hostname: %s", os.hostname());

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("[" + os.hostname() + "] request url: " + req.url + "\n");
    console.log("[%s] Receive: %s", os.hostname(), req.url);
    res.end();
});

server.listen(8080);

console.log("[DEMO] Simple HTTP Server Started");
