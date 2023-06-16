import { pool } from "../database/softJobs.connection.js";

const selectUser = async (email) => {
  const query = "select * from usuarios where email = $1";
  try {
    const { rows } = await pool.query(query, [email]);
    if (rows[0] === undefined || rows.length === 0) {
      throw undefined;
    }
    return rows[0];
  } catch (error) {
    return error;
  }
};

const registerUser = async (email, password, rol, lenguaje) => {
  const query =
    "insert into usuarios (email, password, rol, lenguaje) values ($1, $2, $3, $4) returning *";
  try {
    const { rows } = await pool.query(query, [email, password, rol, lenguaje]);
    if (rows[0] === undefined || rows.length === 0) {
      throw undefined;
    }
    return rows;
  } catch (error) {
    return error;
  }
};

export const softJobsModel = { selectUser, registerUser };
