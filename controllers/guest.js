const Guest = require("../models/GuestModel.js");

const getAll = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 0;
    const status = req.query.status;
    const offset = page * limit;
    const result = await Guest.getAll(status, limit, offset);
    res.status(200).json({
      message: "success",
      total: result.length,
      limit: limit,
      page: page,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll };
