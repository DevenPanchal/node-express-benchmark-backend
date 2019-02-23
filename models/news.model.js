const mongoose = require('mongoose');


const { Schema } = mongoose;
const newsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String },
  image: { type: String },
  source: { type: String }
});

module.exports = mongoose.model('news', newsSchema);
