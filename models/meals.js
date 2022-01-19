const mongoose = require("mongoose");

var mealsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    ready: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    preptime: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const mealsDoc = mongoose.model("mealsdb", mealsSchema);

module.exports = mealsDoc;
