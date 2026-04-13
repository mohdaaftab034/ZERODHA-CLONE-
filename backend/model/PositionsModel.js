 const mongoose = require("mongoose");

const { PositionsSchema } = require('../schemas/PositionsSchema');

// Register model with mongoose instance
const PositionsModel = mongoose.model("positions", PositionsSchema);

module.exports = { PositionsModel };
