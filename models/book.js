// Dependencies ===================================================================================

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema =========================================================================================

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

// Export =========================================================================================

module.exports = Book;
