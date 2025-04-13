import { User } from "../models/userModel.js";
import ErrorHandler from "../middlewares/errorHandler.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return next(new ErrorHandler("User already exists", 400));

    user = await User.create({ name, email, password });

    const token = user.generateJWT();
    res.status(201).cookie("token", token, {
      httpOnly: true,
    }).json({ success: true, message: "Registered successfully" });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) return next(new ErrorHandler("Invalid credentials", 401));

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return next(new ErrorHandler("Invalid credentials", 401));

    const token = user.generateJWT();
    res.status(200).cookie("token", token, {
      httpOnly: true,
    }).json({ success: true, message: "Logged in successfully" });
  } catch (err) {
    next(err);
  }
};

export const updateStreak = async (req, res, next) => {
  const user = req.user;
  const today = new Date().toDateString();
  const lastActive = user.lastActiveDate ? user.lastActiveDate.toDateString() : null;

  if (lastActive === today) {
    return res.json({ success: true, message: "Already active today" });
  }

  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (lastActive === yesterday) {
    user.streak += 1;
  } else {
    user.streak = 1;
  }

  user.lastActiveDate = new Date();
  await user.save();

  res.status(200).json({
    success: true,
    message: "Streak updated",
    streak: user.streak,
  });
};
