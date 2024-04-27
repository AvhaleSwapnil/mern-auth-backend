import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
export const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Created Successfully!" });
  } catch (error) {
    next(error);
  }
};

export const SignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User Not Found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(404, "wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expirayDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expirayDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
