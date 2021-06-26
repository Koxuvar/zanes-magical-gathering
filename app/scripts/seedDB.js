const mongoose = require("mongoose");
const db = require("../models");

// This file empties the card collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactcards"
);

const gameCardSeed = [
    {
        
    }

];

db.Card.remove({})
  .then(() => db.Card.collection.insertMany(gameCardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });