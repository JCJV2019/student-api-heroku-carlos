//import https from 'https';
import http from 'http';
import app from './app.mjs';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

//const __dirname = dirname(fileURLToPath(import.meta.url));

/*
https.createServer({
    key: fs.readFileSync( `${__dirname}/config/server.key`),
    cert: fs.readFileSync( `${__dirname}/config/server.cert`)
}, app)
.listen(process.env.PORT);
*/
http.createServer(app)
.listen(process.env.PORT);


console.log(`Example app listening on port ${process.env.PORT}! Go to http://localhost:8443/`);
   
   