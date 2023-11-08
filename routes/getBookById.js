import express from 'express';

import { Book } from '../models/bookStore.js';

const getBookByIdRouter = express.Router();

getBookByIdRouter.get("/books/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

export default getBookByIdRouter;
