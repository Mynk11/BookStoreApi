import bodyParser from 'body-parser';
import express from 'express';

import addBooksRouter from './routes/addBooks.js';
import deleteBookByIdRouter from './routes/deleteBookById.js';
import getBookByIdRouter from './routes/getBookById.js';
import getBooksRouter from './routes/getBooks.js';
import updateBooksByIdRouter from './routes/updateBookById.js';

// Initialize Express app
export const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(getBooksRouter);
app.use(addBooksRouter);
app.use(getBookByIdRouter);
app.use(deleteBookByIdRouter);
app.use(updateBooksByIdRouter);

export default app;
