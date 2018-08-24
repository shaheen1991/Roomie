const mongoose = require("mongoose");
const db = require("../models");

// This file 

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/roomie"
);

const smackSeed = [
  {
    
    authorName:"Riya",
    authorComment:"Hi friends"
    
  },
  {
    
    authorName:"Riya",
    authorComment:"Anyone here"
    
  }
  
];

db.Smacktalk
  .remove({})
  .then(() => db.Smacktalk.collection.insertMany(smackSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
