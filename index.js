var express = require('express');
var app = express();

app.use("/static" , express.static(__dirname + "/public"));


app.get('/', (req,res) => {
  res.sendFile(__dirname + "/templates/index.html");
  
})

app.listen(3000 , (err) => {
  if (err) console.log(err);
  
  else console.log("Running Successfully !")
  
  
})
