var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var BASE_URL = 'https://delit.herokuapp.com/';
//var BASE_URL = 'http://lol-flosfad.c9users.io/';
function randomStr(s) {
    return Math.round((Math.pow(36, s + 1) - Math.random() * Math.pow(36, s))).toString(36).slice(1);
}

var delMessages = {};

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));


app.post("/del", function (req, res) {
    var mes = req.body.mes;
    var key = randomStr(5);
    delMessages[key] = mes;
    console.log('Made Key ' + key);
    res.send(`<!DOCTYPE html>
    <html>
    <head>
    <title>Del</title>
    <link rel='stylesheet' href='./public/css/styles.css'/>
    </head>
    <body>
    <div class='text-center centered'>
    <h3 id='delUrl'>
    <a href='` + BASE_URL +  key + `' target='_blank'>` +  key + `</a>
    </h3>
    <button class="btn btn-outline" data-clipboard-text='` + BASE_URL +  key + `'>Copy To Clipboard</button>
    </div>
    <footer id="footer">
        Made with <span id="heart" class="animate pulse">&#9825;</span> By <a href="http://kingpixil.github.io/Me" target="_blank">Kabir</a>
    </footer>
    <script src='./public/js/lib/clipboard.min.js'></script>
    <script src='./public/js/scripts.js'></script>
    </body>
    </html>`);
});

app.get("/:index", function (req, res) {
    var count = 5;
    var milCount = parseInt(count.toString() + '00')
    var index = req.params.index;
    if(delMessages[index] != undefined) {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
    <title>Del - Message - It's a secret!</title>
    <link rel='stylesheet' href='./public/css/styles.css'/>
    </head>
    <body>
    <div class='notDeleted animate'>
    <div class='text-center'>
    <h5 id='countDown'>5</h5>
    <h3 class='centered'>` + delMessages[index] + `</h3>
    <footer id="footer">
        Made with <span id="heart" class="animate pulse">&#9825;</span> By <a href="http://kingpixil.github.io/Me" target="_blank">Kabir</a>
    </footer>
    </div>
    </div>
    <script>
        var count = ` + count + `
        function showDeleted() {
            setTimeout(function() {
                document.write("<!DOCTYPE html><html><head><title>Message Deleted</title><link rel='stylesheet' href='./public/css/styles.css'/></head><body><div class='text-center centered animate fadeIn'><svg height='50px' version='1.1' viewBox='0 0 32 32' width='50px' xmlns='http://www.w3.org/2000/svg' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns:xlink='http://www.w3.org/1999/xlink'><title/><desc/><defs/><g fill='none' fill-rule='evenodd' id='Page-1' stroke='none' stroke-width='1'><g fill='#0aaff4' id='icon-27-trash-can'><path d='M23,7 L21,7 L21,7 L21,5.0048815 C21,3.89761602 20.1041422,3 19.0026083,3 L13.9973917,3 C12.8942627,3 12,3.8938998 12,5.0048815 L12,7 L10,7 L6,7 L6,8 L8,8 L8,26.9931517 C8,28.6537881 9.33396149,30 11.0001262,30 L21.9998738,30 C23.6567977,30 25,28.6640085 25,26.9931517 L25,8 L27,8 L27,7 L23,7 L23,7 L23,7 Z M9,8 L9,27.0054385 C9,28.1070044 9.89339733,29 10.9918842,29 L22.0081158,29 C23.1082031,29 24,28.0976562 24,27.0054385 L24,8 L9,8 L9,8 Z M12,10 L12,27 L13,27 L13,10 L12,10 L12,10 Z M16,10 L16,27 L17,27 L17,10 L16,10 L16,10 Z M20,10 L20,27 L21,27 L21,10 L20,10 L20,10 Z M14.0029293,4 C13.4490268,4 13,4.44266033 13,4.99895656 L13,7 L20,7 L20,4.99895656 C20,4.44724809 19.5621186,4 18.9970707,4 L14.0029293,4 L14.0029293,4 Z' id='trash-can'/></g></g></svg><h1>Message Deleted</h1></div></body></html>");
            }, 1000);
            clearInterval(timer);
        }
        var timer = setInterval(function() {
            if(count > 0) {
                count--
                $('#countDown').html(count)
            } else {
                $('.notDeleted').addClass('fadeOut');
                showDeleted();
            }
        }, 1000)
    </script>
    <script src="./public/js/lib/paint.min.js"></script>
    <script src='./public/js/scripts.js'></script>
    </body>
    </html>`);
    setTimeout(function() {
        delete delMessages[index];
    }, milCount);
    } else {
        res.send(`<!DOCTYPE html><html><head><title>404</title><link rel='stylesheet' href='./public/css/styles.css'/></head><body><div class='text-center centered animate fadeIn'><h1>404</h1><br><img id="frown" src='http://emojipedia-us.s3.amazonaws.com/cache/9e/ed/9eed096cb7f1adf49b7495df19945d15.png'/></div></body></html>`);
    }
});



app.listen(process.env.PORT, function (req, res) {
    console.log("Listening");
});
