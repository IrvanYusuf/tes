const connection = require("../db.js");

const getAll = async () => {
  try {
    const query = `SELECT * FROM tbl_guests`;
    const [result] = await connection.execute(query);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {getAll}
