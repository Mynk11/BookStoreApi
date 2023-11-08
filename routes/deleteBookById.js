import express from 'express';

import { Book } from '../models/bookStore.js';

const deleteBookByIdRouter = express.Router();

deleteBookByIdRouter.delete("/books/:id", async (req, res) => {
  const { id } = req.params;

  // Check if the book with the specified ID exists
  Book.findById(id, (err, book) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Book exists, so delete it
    book.remove((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to delete the book" });
      }
      res.json({ message: "Book deleted successfully" });
    });
  });
});

export default deleteBookByIdRouter;
