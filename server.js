var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var color = require('./extra/color');
var view = require('./src/view');

//var BASE_URL = 'https://delit.herokuapp.com/';
//var BASE_URL = 'http://lol-flosfad.c9users.io/';
function randomStr(s) {
    return Math.round((Math.pow(36, s + 1) - Math.random() * Math.pow(36, s))).toString(36).slice(1);
}

function log(s, c) {
    console.log(color[c](s));
}


var delMessages = {};

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views/public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
    log("User with IP " + req.ip + " Visited Lock", "green");
});

app.post("/new", function(req, res) {
   res.send(req.body.message);
});


app.listen(process.env.PORT, function (req, res) {
    log("Listening", "blue");
});
