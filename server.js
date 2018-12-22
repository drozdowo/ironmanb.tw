var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('dist'));


app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
})

app.listen('80', ()=> {
    console.log('app listening on 80');
})