const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testObjectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const TestObject = mongoose.model("TestObject", testObjectSchema);

module.exports = TestObject;
