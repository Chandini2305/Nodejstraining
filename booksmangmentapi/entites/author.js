const mongoose = require("mongoose");
const authorsc = mongoose.Schema({
  id: { type: String },
  name: { type: String },
  biography: { type: String },
  birthdate: { type: String },
  email: { type: String },
  listofbook: { type: String },
});
module.exports = mongoose.model("Author", authorsc);
