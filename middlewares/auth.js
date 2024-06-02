const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.authenticateUser = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });

    if (!foundUser) {
      const error = new Error("Username doesn't exist");
      error.status = 404;
      return next(error);
    }

    const comparedPassword = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );

    if (!comparedPassword) {
      const error = new Error("Incorrect username or password");
      error.status = 400;
      return next(error);
    }

    req.user = foundUser;
    next();
  } catch (error) {
    next(error);
  }
};

exports.verifyAccessToken = async (token) => {
  try {
    const decodedData = jwt.verify(token, process.env.SECRET_KEY);
    return { success: true, data: decodedData };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

exports.authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Please log in to proceed" });
    }

    const result = await this.verifyAccessToken(token);
    if (!result.success) {
      return res.status(403).json({ error: result.error });
    }

    req.user = result.data;
    next();
  } catch (error) {
    next(error);
  }
};
