const express = require("express");
const app = express();
const guestController = require("./controllers/guest.js");
const router = express.Router();

app.get("/tes", (req, res) => {
  res.json({ message: "success" });
});

app.get("/users", guestController.getAll);

app.listen(3000, () => {
  console.log("success");
});
