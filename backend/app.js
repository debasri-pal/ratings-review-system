const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root780", // your actual MySQL password
  database: "reviewsystem"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL connected!");
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ Fetch products
app.get("/api/products", (req, res) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// ✅ Submit review route
// ✅ Submit review route
app.post("/api/reviews", (req, res) => {
  console.log("🛬 /api/reviews route hit"); // Confirms route is triggered

  const { user_id, product_id, rating, review } = req.body;
  console.log("📩 Received POST data:", req.body); // Logs data received

  // Validate server-side
  if (!user_id || !product_id || !rating || !review) {
    console.error("❌ Missing one or more required fields");
    return res.status(400).json({ error: "Missing fields" });
  }

  const query = "INSERT INTO reviews (user_id, product_id, rating, review) VALUES (?, ?, ?, ?)";

  db.query(query, [user_id, product_id, rating, review], (err, result) => {
    if (err) {
      console.error("❌ MySQL Error:", err.sqlMessage || err.message || err);
      return res.status(500).json({ error: "Failed to insert review" });
    }

    console.log("✅ Review inserted:", result);
    res.status(200).json({ message: "Review submitted successfully" });
  });
});
// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
