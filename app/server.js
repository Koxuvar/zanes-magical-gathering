const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Heroku static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Mongo DB connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactcards",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Use apiRoutes
app.use("/api", apiRoutes);

// Define API routes before running
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});