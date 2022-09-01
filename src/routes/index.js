const express = require("express");
const router = express.Router();
const sql = require("mysql");

let connection = sql.createConnection({
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  user: "bsale_test",
  password: "bsale_test",
  database: "bsale_test",
});

// Query to get all the items
router.get("/", (req, res) => {
  connection.query("SELECT * FROM product", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

// Query to Get Categorys
router.get("/category", (req, res) => {
  connection.query("SELECT * FROM category", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

//Query to get all items of a specific
router.get("/category/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM product WHERE category=5",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

// Keep Alive
setInterval(function () {
  connection.query("SELECT 1");
}, 4000);

module.exports = router;
