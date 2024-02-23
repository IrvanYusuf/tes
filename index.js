const express = require("express");
const app = express();
const Guest = require("./models/GuestModel.js");

app.get("/tes", (req, res) => {
  res.json({ message: "success" });
});

app.get("/users", async (req, res) => {
  try {
    const result = await Guest.findAll();
    res.json({ data: result });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => {
  console.log("success");
});
