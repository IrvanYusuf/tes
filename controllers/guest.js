const Guest = require("../models/GuestModel.js");

const getAll = async (req, res) => {
  try {
    const result = await Guest.findAll();
    res.status(200).json({ message: "success", data: result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll };
