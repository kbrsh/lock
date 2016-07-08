var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  
  logging: false,

  storage: 'database.sqlite'
});


var Lock = sequelize.define('Lock', {
    id: { type: Sequelize.STRING(7), unique: true, primaryKey: true },
    message: Sequelize.TEXT
});

sequelize.sync();


function randomStr(s) {
    return Math.round((Math.pow(36, s + 1) - Math.random() * Math.pow(36, s))).toString(36).slice(1);
}


module.exports.getLock = function(id) {
    return Lock.findById(id);
}

module.exports.addLock = (title, content) => randomStr().then(id => Lock.create({
    id: id,
    title: title,
    content: content
}));
