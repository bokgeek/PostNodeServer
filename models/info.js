var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var infoSchema = new Schema({
    label: { type: String },
    content: { type: String },
    user: { type: String },
    device: { type: String }
});

module.exports = mongoose.model('Info', infoSchema);
