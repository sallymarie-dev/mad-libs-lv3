const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/create-mad-libs", (req, res) => {
  console.log("Form submitted!");
  //res.send("Form received!");

  const name = req.query.name;
  const adjective1 = req.query.adjective1;
  const noun1 = req.query.noun1;
  const verb = req.query.verb;
  const adjective2 = req.query.adjective2;
  const noun2 = req.query.noun2;

  console.log("Name:", name);
  console.log("Adjective1:", adjective1);
  console.log("noun1", noun1);
  console.log("verb", verb);
  console.log("adjective2", adjective2);
  console.log("noun2", noun2);
  //res.send("Data Recieved!");
  const storyTemplate = `
  <p>Once upon a time, ${name} went to the ${noun1} and decided to ${verb}. 
    It was a very ${adjective1} day, and they soon discovered a ${adjective2} ${noun2} waiting for them!</p>
  `;

  res.send(storyTemplate);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
