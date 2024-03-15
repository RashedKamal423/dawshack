import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

var app = express();
app.use(express.static('public')); 
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
app.get("/", (req, res) => {
 res.send('Hello World!')
});
app.get("/showfile", (req, res, next) => { 
 // show the page
    const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);
 const _retfile = path.join(__dirname, 'test.html');

 res.sendFile(_retfile);
});