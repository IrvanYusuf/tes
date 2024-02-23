const Guest = require("../models/GuestModel.js");
const connection = require("../db.js");

const getAll = async (req, res) => {
  try {
    const result = await Guest.getAll();
    console.log(result);
    res.status(200).json({ message: "success dapet", data: result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll };
