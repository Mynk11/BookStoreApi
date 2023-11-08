import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness
    index: true,
  },
  author: String,
  summary: String,
});

export const Book = mongoose.model("Book", bookSchema);
