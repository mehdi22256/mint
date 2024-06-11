const Specialty = require("../models/specialty");

const getAllSpecialty = async (req, res, next) => {
  try {
    const getSpecialty = await Specialty.find();
    return res.status(200).json({ getSpecialty });
  } catch (error) {
    next(error);
  }
};

const addSpecialty = async (req, res, next) => {
  try {
    const newSpecialty = await Specialty.create(req.body);
    return res.status(200).json({ newSpecialty });
  } catch (error) {
    next(error);
  }
};
const deleteSpecialty = async (req, res, next) => {
  try {
    const { id } = req.params;

    found = await Specialty.findByIdAndDelete(id);
    return res.status(200).json({ found });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllSpecialty,
  addSpecialty,
  deleteSpecialty,
};
