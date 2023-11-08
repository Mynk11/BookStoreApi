import express from 'express';

import { Book } from '../models/bookStore.js';

const deleteBookByIdRouter = express.Router();

deleteBookByIdRouter.delete("/books/:id", async (req, res) => {
  // Check if the book with the specified ID exists
  const { id } = req.params;

  try {
    // Use `await` to get the result of `Model.findById()` as a promise
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default deleteBookByIdRouter;
