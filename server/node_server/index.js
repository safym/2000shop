const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const PORT = 3001;
const app = express();

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
  db.all('select * from product;', [], (err, result) => {
    if (err) {
      res.json({ message: {err} });
      console.log(err); 
    } else {
      res.json({ message: {result} });
    }
  })
});
