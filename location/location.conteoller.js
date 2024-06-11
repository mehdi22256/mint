const location = require("../models/location");

const getAllLocation = async (req, res, next) => {
  try {
    const getLocation = await location.find();
    return res.status(200).json({ getLocation });
  } catch (error) {
    next(error);
  }
};

const addLocation = async (req, res, next) => {
  try {
    const newLocation = await location.create({
      ...req.body,
      user: req.user.id,
    });
    return res.status(200).json({ newLocation });
  } catch (error) {
    next(error);
  }
};
const deleteLocation = async (req, res, next) => {
  try {
    const { id } = req.params;

    found = await location.findByIdAndDelete(id);
    return res.status(200).json({ found });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllLocation,
  addLocation,
  deleteLocation,
};
