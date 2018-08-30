const express = require('express');
const app = express();

// app.get('/',(req,res) => res.send('Hello'));
app.use(express.static('./src'))

app.listen(3000,function(){
console.log("Server is running on port: 3000");
})
