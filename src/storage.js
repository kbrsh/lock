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
    id: { type: Sequelize.STRING(15), unique: true, primaryKey: true },
    message: Sequelize.TEXT
});

sequelize.sync();


function randomStr() {
    return Math.round((Math.pow(36, 15 + 1) - Math.random() * Math.pow(36, 15))).toString(36).slice(1);
}

function gen(id) {
    var id = randomStr();
    return Lock.findById(id).then(result => result ? gen() : id);
}


module.exports.getLock = function(id) {
    return Lock.findById(id);
}

module.exports.addLock = (message) => gen().then(id => Lock.create({
    id: id,
    message: message
}));

module.exports.deleteLock = function(id) {
    Lock.findById(id).then(lock => lock.destroy());
}
