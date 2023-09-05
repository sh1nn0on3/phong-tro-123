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
      } else if (name.length < 3) {
        return resolve({
          err: 1,
          msg: "Name must be atleast 3 characters.",
        });
      } else if (phone.length !== 10) {
        return resolve({
          err: 1,
          msg: "Please enter valid phone number.",
        });
      } else if (password.length < 6) {
        return resolve({
          err: 1,
          msg: "Password must be atleast 6 characters.",
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
      console.log(phone, password);
      // validate
      if (!phone || !password) {
        return resolve({
          err: 1,
          msg: "Please enter all required fields.",
        });
      } else if (phone.length !== 10) {
        return resolve({
          err: 1,
          msg: "Please enter valid phone number.",
        });
      } else if (password.length < 6) {
        return resolve({
          err: 1,
          msg: "Password must be atleast 6 characters.",
        });
      }

      // check for existing user
      const Users = await db.User.findAll({
        where: { phone },
        raw: true,
      });

      let checkPassword = null;
      if (Users[0]) {
        checkPassword = await argon2.verify(Users[0].password, password);
      } else {
        return resolve({
          err: 2,
          msg: "User not found.",
        });
      }

      const token = checkPassword
        ? jwt.sign({ id: Users.id, phone: Users.phone }, process.env.JWT_KEY, {
            expiresIn: "1h",
          })
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
