const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set folder public untuk file statis (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Route utama untuk menampilkan halaman HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
