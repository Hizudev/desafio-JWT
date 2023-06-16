import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { handleErrors } from "../database/softJobs.errors.js";
dotenv.config();

export const verifyToken = (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) {
      throw { code: "402" };
    }
    const token = bearerHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_PASS);
    req.email = payload.email;
    req.password = payload.password;
    next();
  } catch (error) {
    const { status, message } = handleErrors(error.code, error.message);
    res.status(status).json({ status, message });
  }
};
