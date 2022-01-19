const mongoose = require("mongoose");

var usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  status: {
    type: String,
  },
  picture: {
    type: String,
  },
  
},{ timestamps: true });

const usersDoc = mongoose.model("userdb", usersSchema);

module.exports = usersDoc;
