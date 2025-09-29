const express = require("express");
const router = express.Router();
const generateToken = require("./utils/token");

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

const activeTokens = [];

router.get("/books", (req, res) => {
    res.json(books);
});

router.post("/books", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

router.post("/login", (req, res) => {
  const { name, password } = req.body;
  const user = users.find(u => u.name === name && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "שם משתמש או סיסמה לא נכונים" });
  }

  const token = generateToken();
  activeTokens.push(token);

  res.json({ token });
});

router.post("/logout", (req, res) => {
  const { token } = req.body; 

  const index = activeTokens.indexOf(token);
  if (index !== -1) {
    activeTokens.splice(index, 1); 
    return res.json({ message: "התנתקת בהצלחה" });
  }

  res.status(400).json({ error: "טוקן לא נמצא" });
});

module.exports = { books, users, router, activeTokens };