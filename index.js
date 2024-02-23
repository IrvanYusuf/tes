const express = require("express");
const app = express();
const apiRoutes = require("./routes/api.js");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tes", (req, res) => {
  res.json({ message: "success" });
});

app.use("/api", apiRoutes);

app.listen(3000, () => {
  console.log("success");
});
