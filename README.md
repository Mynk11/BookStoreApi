To Run this project you need to add an .env file at the root directory of the project

---

Adding Sample of .env file

MONGODB_URI=mongodb+srv://<username>:<password>@learning-cluster.hcskwwr.mongodb.net/bookstore?retryWrites=true&w=majority

---

To run this project use command npm start

API Purpose: The BookStore API is designed to manage a collection of books in a bookstore.

Endpoints:

GET /books: Retrieve a list of all books in the store.

GET /books/:id: Retrieve details of a specific book by its unique identifier.

POST /books: Add a new book to the store. Requires book details such as title, author, and summary.

PUT /books/:id: Update the details of a specific book. Allows updates to title, author, and summary.

DELETE /books/:id: Delete a specific book by its unique identifier.
Data Structure:

Each book has the following attributes:
title: The title of the book (String).
author: The author of the book (String).
summary: A brief summary or description of the book (String).
Validation:

The API enforces data validation to ensure that mandatory fields (title, author, and summary) are provided when adding or updating a book.
A unique constraint is applied to the title field, preventing the addition of duplicate books with the same title.
Pagination:

The API supports pagination for the /books endpoint, allowing the client to specify the page and limit to retrieve a specific number of books per page.
Error Handling:

The API handles errors gracefully, providing clear error messages and status codes in responses. For example, it responds with a 404 status code when a requested book is not found

Imporvements that can de Added

1. Project can be created using serverless
2. Api's can be deployed on api gateway
3. Mongo can be deployed on EC2
4. Middleware can be added for better error checking (express-validator)
