const express = require('express');
const bodyParser = require('body-parser');
const MongoClient  = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

var db;

MongoClient.connect('mongodb://dapseen:KeepM0ving@ds261678.mlab.com:61678/crud_app',function(err,database){
    if(err) return console.log(err);
    db = client.db('crud_app');
    app.listen(3000,function(){
        console.log('listening on 3000')
    });
});
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
});


app.post('/quotes', function (req,res) {
    console.log(req.body)
})

