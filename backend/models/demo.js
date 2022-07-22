const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let demoSchema = new Schema({
  name: String,
});

const demoModel = mongoose.model("pruebas", demoSchema);
module.exports = demoModel;

