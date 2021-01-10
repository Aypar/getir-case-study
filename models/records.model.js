const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecordsSchema = new Schema({
    _id: Schema.ObjectId,
    key: String,
    value: String,
    createdAt: Date,
    counts: [Number]
})
const Records = mongoose.model('Records', RecordsSchema)
module.exports = Records;
