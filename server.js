var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var color = require('./extra/color');
var view = require('./src/view');

function randomStr(s) {
    return Math.round((Math.pow(36, s + 1) - Math.random() * Math.pow(36, s))).toString(36).slice(1);
}

function log(s, c) {
    console.log(color[c](s));
}


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views/public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
    log("User with IP " + req.ip + " Visited Lock", "green");
});

app.post("/new", function(req, res) {
   
});

app.get("/:key", function(req, res) {
   var key = req.params["key"];
   res.send(key);
});


app.listen(process.env.PORT, function (req, res) {
    log("Listening", "blue");
});
