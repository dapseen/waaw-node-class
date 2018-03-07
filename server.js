const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
});


app.post('/quotes', function (req,res) {
    console.log(req.body)
})

app.listen(3000);