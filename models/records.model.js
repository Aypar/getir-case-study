const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecordsSchema = new Schema({})
const Records = mongoose.model('Records', RecordsSchema)
module.exports = Records;
