const express = require("express");
const app = express();
const connection = require("./db.js");

app.get("/tes", (req, res) => {
  res.json({ message: "success" });
});

app.get("/users", async (req, res) => {
  try {
    const query = "SELECT * FROM tbl_guests";
    const [result] = await connection.execute(query);
    res.json({ data: result });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => {
  console.log("success");
});
