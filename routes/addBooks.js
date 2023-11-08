import express from 'express';

import { Book } from '../models/bookStore.js';

const addBooksRouter = express.Router();

function validateBookData(req, res, next) {
  const { title, author, summary } = req.body;

  if (!title || !author || !summary) {
    return res
      .status(400)
      .json({ error: "All fields (title, author, and summary) are required." });
  }

  next(); // Move to the next middleware if the data is valid
}

addBooksRouter.post("/books", validateBookData, async (req, res) => {
  const { title, author, summary } = req.body;

  // Create a new book document
  const newBook = new Book({ title, author, summary });

  try {
    // Attempt to save the new book
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ error: "Book with the same title already exists." });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

export default addBooksRouter;
