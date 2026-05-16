import bcrypt from "bcrypt";
import { Account } from "../models/account.model.js";
import jwt from "jsonwebtoken";

export const AccountController = {
  register: async (req, res) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const emailExisted = await Account.findOne({ email });
    if (emailExisted) {
      return res.status(400).json({ message: "Email da ton tai" });
    }

    const account = await Account.create({
      username,
      email,
      
      password: hashedPassword,
      
    });
    res.send(account);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const account = await Account.findOne({ email });
    if (!account) {
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });
    }
    const isPasswordValid = await bcrypt.compare(password, account.password);
    
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });
    }

    // const apiKey = `web-${account.id}-${account.email}-${process.env.SECRET_KEY}`;
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        customerId: account.id,
        name: account.name,
        role: "account",
        email: account.email,
      },
      secretKey,
      {
        expiresIn: "1h",
        algorithm: "HS256",
      },
    );

    res.send({ token });
  },
};
