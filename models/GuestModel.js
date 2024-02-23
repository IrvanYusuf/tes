const connection = require("../db.js");

const getAll = async (status = undefined, limit, offset) => {
  try {
    let query = "";
    let queryParams = [];
    if (status !== undefined) {
      query = `SELECT * FROM tbl_guests WHERE status = ? LIMIT ? OFFSET ?`;
      queryParams = [status, limit, offset];
    } else {
      query = `SELECT * FROM tbl_guests LIMIT ? OFFSET ?`;
      queryParams = [limit, offset];
    }
    const [result] = await connection.query(query, queryParams);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll };
