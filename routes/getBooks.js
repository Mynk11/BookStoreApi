import express from 'express';

import { Book } from '../models/bookStore.js';

const getBooksRouter = express.Router();

getBooksRouter.get("/books", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 20; // Default to 20 books per page

  // Calculate the number of books to skip based on page and limit
  const skip = (page - 1) * limit;

  // Query the database for books with pagination
  Book.find()
    .skip(skip)
    .limit(limit)
    .lean() // Use .lean() to get plain JavaScript objects instead of Mongoose documents
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

export default getBooksRouter;
