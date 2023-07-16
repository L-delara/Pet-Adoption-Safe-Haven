const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  //all pets have these fields
  petType: {
    type: String,
    enum: ["Dog", "Cat"],
    required: true,
  },
  petName: {
    type: String,
    required: true,
  },
  isAdopted: {
    type: Boolean,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Female", "Male"],
    required: true,
  },
  breed: {
    type: String,
  },
  color: {
    type: String,
  },
  age: {
    type: String,
    enum: [
      "Puppy (< 1 year)",
      "Kitten (< 1 year)",
      "Young (1-2 years)",
      "Adult (2-6 years)",
      "Senior (6+ years)",
    ],
  },
  image: {
    type: String,
    default:
      "https://img.freepik.com/free-vector/cute-dog-cute-cat-cartoon-illustration_138676-3238.jpg",
    //Image by catalyststuff on Freepik
  },
  bio: {
    type: String,
  },
});

module.exports = mongoose.model("Pet", petSchema);
