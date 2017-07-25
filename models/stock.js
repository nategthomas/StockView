var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');


var schema = new Schema({
  name: {type: String, required: true},
  data: {type: Array, required: true},
  start_date: {type: String, required: true},
  end_date: {type: String, required: true},
  desc: {type: String, required: true},
  today: {type: Number, required: true}
});

schema.plugin(uniqueValidator);


module.exports = mongoose.model('Stock', schema);
