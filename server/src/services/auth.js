import db from "../models";
import argon2 from "argon2";
import { v4 as uuidv4 } from "uuid";

const hasdPassword = async (password) => {
  return await argon2.hash(password);
};

export const registerService = (body) => {
  new Promise(async (resolve, reject) => {
    try {
      const { name, phone, password } = body;
      console.log({ name, phone, password });

      // validate
      if (!name || !phone || !password) {
        return resolve({
          err: -1,
          msg: "Please enter all required fields.",
        });
      }

      // check for existing user
      const [newUser, checked] = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          name,
          phone,
          password : await hasdPassword(password),
          id: uuidv4(),
        },
      });

      console.log(4);

      const token = checked
        ? jwt.sign(
            { id: newUser.id, phone: newUser.phone },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          )
        : null;

      resolve({
        err: token ? 0 : -1,
        msg: token ? "User registered successfully." : "User already exists.",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });
};
