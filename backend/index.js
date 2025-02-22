const express = require("express");
const cors = require("cors"); // Import CORS package
const app = express();
const path = require("path");

const imageRoutes = require("./routes/upload.js");
const port = 3000;

// Enable CORS for all frontends
app.use(cors());

// Middleware for parsing JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.use("/uploads", express.static("uploads"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1", imageRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
