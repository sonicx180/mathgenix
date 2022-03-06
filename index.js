var express = require('express');
var app = express();

app.get('/', (req,res) => {
  res.sendFile(__dirname + "/templates/index.html");
  
})

app.listen(3000)
