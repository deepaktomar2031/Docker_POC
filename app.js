const app = require("express")();

const PORT = 3000;

console.log("Log from Docker Container!");

app.get("/", (req, res) => {
  res.status(200).send("I'm inside Docker Container!");
});

app.listen(PORT, () => console.log(`Server is up & running on port ${PORT}`));
