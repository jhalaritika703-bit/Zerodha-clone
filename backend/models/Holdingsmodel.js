const mongoose = require("mongoose");

const { HoldingSchema } = require("../schemas/HoldingSchemas");

const HoldingsModel = mongoose.model("Holdings", HoldingSchema);

module.exports = { HoldingsModel };