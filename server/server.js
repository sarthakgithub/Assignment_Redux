var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.dev.config');
var fs = require("fs");
var cors = require('cors');
var bodyParser = require('body-parser');

const port = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.static('./src/images'));
app.use(express.static('./server/images'))
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Key, Authorization");
    next();
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/items', function(req, res){
    fs.readFile( "./server/json/data.json",'utf-8',  (error ,data)=>{
        var r = error?error:data;
        res.send(JSON.parse(r));
    });
});

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    }
});

app.put('/items/:id',function(req,res){
    var id = req.params.id;
    fs.readFile('./server/json/data.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }
        else {
            var jsonObject = JSON.parse(data);
            var shows = jsonObject.shows;

            var filteredArray = shows.map(show => {
                if(show.id === req.params.id){
                    show = req.body
                }
                return show
            });
            jsonObject.shows = filteredArray;

            var json = JSON.stringify(jsonObject);
            fs.writeFile('./server/json/data.json', json, 'utf8', function (err) {
                if (err)
                    throw err;
                res.send(json);
            });
        }

    })
});

