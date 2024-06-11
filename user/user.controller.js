const User = require("../models/user");
const location = require("../models/location");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (userCredentials) => {
  const payload = {
    id: userCredentials._id,
    username: userCredentials.username,
    firstName: userCredentials.firstName,
    lastName: userCredentials.lastName,
    email: userCredentials.email,
    gender: userCredentials.gender,
    age: userCredentials.age,
    city: userCredentials.city,
    location: userCredentials.location,
    image: userCredentials.image,
    certificate: userCredentials.certificate,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY);
  return token;
};

const getAllUsers = async (req, res, next) => {
  try {
    const getAll = await User.find({});
    res.status(200).json(getAll);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const one = await User.findById(id);
    res.status(200).json(one);
  } catch (error) {
    next(error);
  }
};

const signUp = async (req, res, next) => {
  try {
    console.log(req.files);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    let imagename, certificatename;
    let imageUrl,
      certificateUrl = null;

    if (req.files.image?.length >= 0) {
      imagename = req.files.image[0].filename;
      imageUrl = "image/" + imagename;
    }

    if (req.files.certificate?.length >= 0) {
      certificatename = req.files.certificate[0].filename;
      certificateUrl = "image/" + certificatename;
    }

    const newUserData = {
      ...req.body,
      image: imageUrl,
      certificate: certificateUrl,
    };
    const createdUser = await User.create(newUserData);

    const userId = createdUser._id;
    await location.create({ ...req.body, user: userId });

    const generatedToken = generateToken(createdUser);
    res.status(201).json(generatedToken);
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const payLoad = req.user;
    const generatedToken = generateToken(payLoad);
    res.status(201).json(generatedToken);
  } catch (error) {
    next(error);
  }
};

const putUser = async (req, res, next) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json(deleteUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  signUp,
  putUser,
  deleteUser,
  signIn,
};
