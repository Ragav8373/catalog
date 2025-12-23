const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

/* ===== MIDDLEWARE ===== */
app.use(cors());
app.use(express.json());

/* ===== DATABASE ===== */
mongoose.connect("mongodb://localhost:27017/productDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB connection error:", err));

/* ===== ROUTES ===== */
app.use("/api/products", productRoutes);

/* ===== SERVER ===== */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
