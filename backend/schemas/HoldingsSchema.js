const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
    name: String,   
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String, 

}); 
module.exports = mongoose.models.holding || mongoose.model("holding", HoldingsSchema);
