var mongoose = require('mongoose');
var config = require('../config/config');

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.dbname}`, { useNewUrlParser: true,useUnifiedTopology: true } );

function db(success, error){
    mongoose.connection.on('open', function(){
        success();
    });

    mongoose.connection.on('error', function(){
        error();
    });
}

module.exports = db;