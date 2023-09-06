import db from "../models";
import argon2 from "argon2";
import { v4 as uuidv4 } from "uuid";

import chothuecanho from "../../data/chothuecanho.json";
require("dotenv").config();

export const insertService = () => {
  new Promise(async (resolve, reject) => {
    try {
      const response = await authSerivce.insertService(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({
        err: -1,
        msg: "failed to insert data" + error.message,
      });
    }
  });
};
