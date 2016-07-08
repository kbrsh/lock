var fs = require('fs');

var template = fs.readFileSync("./views/template/template.html", "utf-8");

var render = function(message) {
    return template.replace(/{{message}}/g, message)
}

module.exports.render = render;