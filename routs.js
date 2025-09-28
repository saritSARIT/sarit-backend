const express = require("express");
const router = express.Router();

 const books = [
    {
        id: 1,
        title: "book1"
    },
    {
        id: 2,
        title: "book2"
    },
    {
        id: 3,
        title: "book3"
    },
    {
        id: 4,
        title: "book4"
    }
];

 const users = [
    {
        name: "user1",
        password: "pass1"
    }
];
router.get("/books", (req, res) => {
    res.json(books);
});

router.post("/books", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

module.exports = { books, users, router };