import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { softJobsModel } from "../models/softJobs.model.js";
import { handleErrors } from "../database/softJobs.errors.js";

const verifyUser = async (email) => {
  if ((await softJobsModel.selectUser(email)) == undefined) {
    return true;
  } else {
    return false;
  }
};

const tokenGen = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw { code: "400" };
    }
    const token = jwt.sign({ email, password }, process.env.JWT_PASS, {
      expiresIn: "15m",
    });
    res.json({ token });
  } catch (error) {
    const { status, message } = handleErrors(error.code, error.message);
    res.status(status).json({ status, message });
  }
};

const getUser = async (req, res) => {
  const { email, password } = req;
  try {
    const result = await softJobsModel.selectUser(email);
    if (result === undefined) {
      throw { code: "404" };
    } else if (result.name === "error") {
      throw { code: result.code, message: result.message };
    }
    const verifyPass = await bcrypt.compare(password, result.password);
    if (!verifyPass) {
      throw { code: "401" };
    }
    res.json({ result });
  } catch (error) {
    const { status, message } = handleErrors(error.code, error.message);
    res.status(status).json({ status, message });
  }
};

const createUser = async (req, res) => {
  const { email, password, rol, lenguaje } = req.body;
  try {
    if (!email || !password || !rol || !lenguaje) {
      throw { code: "403" };
    }
    if (!await verifyUser(email)) {
      throw { code: "409" };
    }
    const hashPass = await bcrypt.hash(password, 10);
    const result = await softJobsModel.registerUser(
      email,
      hashPass,
      rol,
      lenguaje
    );
    if (result === undefined) {
      throw { code: "404" };
    } else if (result.name === "error") {
      throw { code: result.code, message: result.message };
    } else if (result === 400) {
      throw { code: "400" };
    }
    return res.json({ message: "Creado. Intente logear"});
  } catch (error) {
    const { status, message } = handleErrors(error.code, error.message);
    res.status(status).json({ status, message });
  }
};

export const softJobsController = {
  tokenGen,
  getUser,
  createUser,
};
