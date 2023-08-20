const mongoose = require('mongoose')
const Schema = mongoose.Schema


const OrderSchema = new Schema({
    Order: { type: [String], required: true },

    createdAt: { type: Date, default: Date.now },

})


module.exports = mongoose.model("Order", OrderSchema)