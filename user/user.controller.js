const User = require("../models/user");
const location = require("../models/location");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const getFirebaseImageUrl = require("../config/firebasestorageservice");

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
    role: userCredentials.role,
    trusted: userCredentials.trusted,
    clinicLocation: userCredentials.clinicLocation,
    holidays: userCredentials.holidays,
    startTime: userCredentials.startTime,
    endTime: userCredentials.endTime,
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

const getPharmacist = async (req, res, next) => {
  try {
    let find = { role: "665de37ce9ef4cb7062684e0" };
    if (req.body.governorate != "null") {
      find.governorate = req.body.governorate;
    }
    const pharmacist = await User.find(find);
    res.status(200).json(pharmacist);
  } catch (error) {
    next(error);
  }
};

const getDoctor = async (req, res, next) => {
  try {
    let find = { role: "665de357e9ef4cb7062684dd" };

    if (req.body.city != "null") {
      find.city = req.body.city;
    }

    if (req.body.specialty != "null") {
      find.specialty = req.body.specialty;
    }
    console.log(req.body);
    const doctors = await User.find(find);
    res.status(200).json(doctors);
  } catch (error) {
    next(error);
  }
};

const signUp = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    let imageUrl,
      certificateUrl = null;

    if (req.files.image?.length >= 0) {
      imageUrl = await getFirebaseImageUrl(
        "profile",
        req.files.image[0].path,
        req.files.image[0].filename
      );
    }

    if (req.files.certificate?.length >= 0) {
      certificateUrl = await getFirebaseImageUrl(
        "certificate",
        req.files.certificate[0].path,
        req.files.certificate[0].filename
      );
    }

    if (!req.body.specialty || req.body.specialty.trim() === "") {
      req.body.specialty = new mongoose.Types.ObjectId(
        "666d68a046a80e2534658138"
      );
    } else {
      req.body.specialty = new mongoose.Types.ObjectId(req.body.specialty);
    }

    const newUserData = {
      ...req.body,
      image: imageUrl,
      certificate: certificateUrl,
    };
    const createdUser = await User.create(newUserData);

    let userId = createdUser._id;
    if (!req.body.longitude || !req.body.latitude) {
      return res.status(400).json({ message: "Location is required" });
    }

    await location.create({
      user: userId,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
    });

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
    let imageUrl;
    console.log(req.file.filename);
    const { id } = req.params;
    if (req.file && req.file.image?.length >= 0) {
      imageUrl = await getFirebaseImageUrl(
        "profile",
        req.file.path,
        req.file.filename
      );
    }
    const newUserData = {
      ...req.body,
      image: imageUrl,
    };
    const updateUser = await User.findByIdAndUpdate(id, newUserData, {
      new: true,
    });

    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const generatedToken = generateToken(updateUser);

    res.status(200).json(generatedToken);
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
  getDoctor,
  signUp,
  putUser,
  deleteUser,
  signIn,
  getPharmacist,
};
