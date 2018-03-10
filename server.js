const express = require('express');
const bodyParser = require('body-parser');
const MongoClient  = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));
//url

const url = 'mongodb://dapseen:KeepM0ving@ds261678.mlab.com:61678/crud_app';

const dbname = 'crud_app';

var db


MongoClient.connect(url,function(err,client){
    if(err) return console.log(err);
      db = client.db(dbname);
    app.listen(3000,function(){
        console.log('listening on 3000')
    });
});
app.get('/',function(req,res){
     db.collection('qoutes').find().toArray(function(err,result){
        if(err) return console.log(err);
        //render
        res.render('index.ejs', {quotes : result});
    });

});


app.post('/quotes', function (req,res) {
   db.collection('qoutes').save(req.body,function(err,result){
     if(err) return console.log(err);

       console.log('record saved to database');
       res.redirect('/');
   });
    console.log(req.body)
});

