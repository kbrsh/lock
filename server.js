var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var color = require('./extra/color');
var view = require('./src/view');

function log(s, c) {
    console.log(color[c](s));
}

function notFound(res) {
    res.sendFile(__dirname + "/views/404/404.html");
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views/public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
    log("User with IP " + req.ip + " Visited Lock", "green");
});

app.post("/new", function(req, res) {
   res.send(view.renderNew(req.body.message))
});

app.get("/:key", function(req, res) {
   var key = req.params["key"];
   res.send(key);
});


app.listen(process.env.PORT, function (req, res) {
    log("Listening", "blue");
});
