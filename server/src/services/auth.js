import db from "../models";
import argon2 from "argon2";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const hasdPassword = async (password) => {
  return argon2.hash(password);
};

// ~~~~~~~~~~~~~~~ RegisterService ~~~~~~~~~~~~~~~
export const registerService = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, phone, password } = body;

      // validate
      if (!name || !phone || !password) {
        return resolve({
          err: 1,
          msg: "Please enter all required fields.",
        });
      }

      // check for existing user
      const [newUser, checked] = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          name,
          phone,
          password: await hasdPassword(password),
          id: uuidv4(),
        },
      });

      const token = checked
        ? jwt.sign(
            { id: newUser.id, phone: newUser.phone },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          )
        : null;

      resolve({
        err: token ? 0 : 2,
        msg: token ? "User registered successfully." : "User already exists.",
        token: `Bearer ${token}` || null,
      });
    } catch (error) {
      reject(error);
    }
  });
};

// ~~~~~~~~~~~~~~~ LoginService ~~~~~~~~~~~~~~~
export const loginService = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { phone, password } = body;

      // validate
      if (!phone || !password) {
        return resolve({
          err: 1,
          msg: "Please enter all required fields.",
        });
      }

      // check for existing user
      const Users = await db.User.findAll({
        where: { phone },
        raw: true,
      });

      const checkPassword = Users
        ? await argon2.verify(Users[0].password, password)
        : null;

      const token = checkPassword
        ? jwt.sign(
            { id: Users.id, phone: Users.phone },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          )
        : null;

      resolve({
        err: token ? 0 : 2,
        msg: token ? "User logged in successfully." : "Invalid credentials.",
        token: `Bearer ${token}` || null,
      });
    } catch (error) {
      reject(error);
    }
  });
};
