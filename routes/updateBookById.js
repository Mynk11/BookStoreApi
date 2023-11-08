import express from 'express';

import checkValidId from '../middleware/checkValidId.js';
import { Book } from '../models/bookStore.js';

const updateBooksByIdRouter = express.Router();

updateBooksByIdRouter.put("/books/:id", checkValidId, async (req, res) => {
  const { id } = req.params;
  const { title, author, summary } = req.body;

  // Create an object with the fields that are allowed to be updated
  const updateFields = {};
  if (title) updateFields.title = title;
  if (author) updateFields.author = author;
  if (summary) updateFields.summary = summary;

  try {
    // Update the book record with only the allowed fields
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default updateBooksByIdRouter;
