const express= require('express');
const path = require('path');
const app= express();
const BUILD_DIR = path.join(__dirname, 'dist', 'angular-portfolio');
const INDEX_PAGE = path.join(BUILD_DIR, 'index.html');

app.use(express.static(BUILD_DIR));

app.get('/*' , function(req,res){
    console.log(__dirname);
    res.sendFile(INDEX_PAGE);
});

app.listen(process.env.PORT ||8080);