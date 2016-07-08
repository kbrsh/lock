var fs = require('fs');

var template = fs.readFileSync("./views/template/template.html", "utf-8");
var newTemplate = fs.readFileSync("./views/new/new.html", "utf-8");

var renderDel = function(message) {
    return template.replace(/{{message}}/g, message);
}

var renderNew = function(link) {
    return newTemplate.replace(/{{link}}/g, link);
}

module.exports.renderDel = renderDel;
module.exports.renderNew = renderNew;