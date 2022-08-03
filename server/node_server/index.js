const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const PORT = 3001;
const app = express();

app.use(cors(
  {origin:"*"}
));

const db = new sqlite3.Database(__dirname + '/main.sqlite', (err) => {
    if (err) {
        console.log("Failed to connect");
    }
    else {
        console.log("Connected");
    }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api/products", (req, res) => {
  db.all('select ID, Name, Price, Announced, Image from product;', [], (err, result) => {
    if (err) {
      res.json({ message: {err} });
      console.log(err); 
    } else {
      res.json({ message: {result} });
    }
  })
});

app.get("/api/products/:id", (req, res) => {
  let id = req.params.id;
  db.all('select * from product where ID = ?', id, (err, result) => {
    if (err) {
      res.json({ message: {err} });
      console.log(err); 
    } else {
      res.json({ message: {result} });
    }
  })
});