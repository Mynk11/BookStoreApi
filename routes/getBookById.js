import express from 'express';
import mongoose from 'mongoose';

import checkValidId from '../middleware/checkValidId.js';
import { Book } from '../models/bookStore.js';

const getBookByIdRouter = express.Router();

getBookByIdRouter.get("/books/:id", checkValidId, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid book ID format" });
  }

  const book = await Book.findById(req.params.id);
  res.json(book);
});

export default getBookByIdRouter;
