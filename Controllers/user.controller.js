import { UserModel } from "../Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function Register_handler(req, res) {
  let { Name, phone_number, password } = req.body;
  try {
    const IsAlready = await UserModel.findOne({ phone_number: phone_number });
    if (IsAlready !== null) {
      res.status(400).send({
        message: "User already exists",
      });
    } else {
      bcrypt.hash(password, 8, async (err, hash) => {
        password = hash;
        await UserModel.create({ Name, phone_number, password });
        res.status(201).send("registered");
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
}

export async function Login_handler(req, res) {
  const { phone_number, password } = req.body;
  try {
    const user = await UserModel.findOne({ phone_number: phone_number });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign(
            { user_id: user._id, phone_number: phone_number },
            process.env.SECRET_KEY
          );
          res.status(200).send({
            message: "successfull login",
            user_id : user._id,
            token: token,
          });
        } else {
          res.send("wrong credentials");
        }
      });
    } else {
      res.send("wrong credentials");
    }
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong",
    });
  }
}
