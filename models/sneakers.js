const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sneakersSchema = new Schema({
sneakers:String,
size: Number,
model: String,
deadstock:Boolean



});

module.exports = mongoose.model('sneakers',sneakersSchema);
