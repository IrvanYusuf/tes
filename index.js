const express = require("express");
const app = express();

app.get("/tes", (req, res) => {
  res.json({ message: "success" });
});

app.get("/users", (req, res) => {
  res.json({ message: "success", data: { name: "irvan" } });
});

app.listen(3000, () => {
  console.log("success");
});
