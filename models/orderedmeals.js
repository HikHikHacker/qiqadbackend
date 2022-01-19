const mongoose = require("mongoose");

var orderedmealsSchema = new mongoose.Schema(
  {
    orderstatus: {
      type: String,
      required: true,
    },
    createdby: {
      type: String,
    },
    tableid: {
      type: String,
    },
    userid: {
      type: String,
    },
    mealid: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
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
    paymentstatus: {
      type: String,
      required: true,
    },
    paymentmethod: {
      type: String,
      required: true,
    },
    transactionid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const orderedmealsDoc = mongoose.model("orderedmealsdb", orderedmealsSchema);

module.exports = orderedmealsDoc;
