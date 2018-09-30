var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Count = new Schema({
  createdAt: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('Count', Count);