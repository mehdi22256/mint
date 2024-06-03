const Role = require("../models/role");

const getAllRoles = async (req, res, next) => {
  try {
    const getRoles = await Role.find();
    return res.status(200).json({ getRoles });
  } catch (error) {
    next(error);
  }
};

const addRoles = async (req, res, next) => {
  try {
    const newRols = await Role.create(req.body);
    return res.status(200).json({ newRols });
  } catch (error) {
    next(error);
  }
};
const deleteRoles = async (req, res, next) => {
  try {
    const { id } = req.params;

    found = await Role.findByIdAndDelete(id);
    return res.status(200).json({ found });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllRoles,
  addRoles,
  deleteRoles,
};
