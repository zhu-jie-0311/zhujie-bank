var mongoose = require('mongoose');


var diarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    content:String

});

//模型
var diaryModel = mongoose.model('diary', diarySchema);

module.exports = diaryModel;
