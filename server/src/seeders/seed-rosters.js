const db = require("../models");

db.rosters
  .create([
    {
      firstName: "David",
      lastName: "Andrews",
    },
    {
      firstName: "Rachel",
      lastName: "Barnes",
    },
    {
      firstName: "Chris",
      lastName: "Betts",
    },
    {
      firstName: "Andrew",
      lastName: "Blunt",
    },
    {
      firstName: "Simon",
      lastName: "Carter",
    },
  ])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });

// still needs to be tested
// many not be the final version
// in the terminal, run command: node seeders/seed-rosters.js
// once finalized, command should be included in the ReadMe file for the Demo portion
