"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app.js"));

var _fs = _interopRequireDefault(require("fs"));

var _path = require("path");

var _url = require("url");

//import https from 'https';
//const __dirname = dirname(fileURLToPath(import.meta.url));

/*
https.createServer({
    key: fs.readFileSync( `${__dirname}/config/server.key`),
    cert: fs.readFileSync( `${__dirname}/config/server.cert`)
}, app)
.listen(process.env.PORT);
*/
_http["default"].createServer(_app["default"]).listen(process.env.PORT);

console.log("Example app listening on port ".concat(process.env.PORT, "! Go to http://localhost:8443/"));