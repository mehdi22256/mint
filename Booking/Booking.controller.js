const Booking = require("../models/booking");

const getBooking = async (req, res, next) => {
  try {
    const getbooking = await Booking.find();
    return res.status(200).json({ getbooking });
  } catch (error) {
    next(error);
  }
};
const findOneBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findOne = await Booking.find(id);
    return res.status(200).json({ findOne });
  } catch (error) {
    next(error);
  }
};

const addBooking = async (req, res, next) => {
  try {
    const addbooking = await Booking.create(req.body);
    return res.status(200).json({ addBooking });
    return res.status;
  } catch (error) {
    next(error);
  }
};
const deleteBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletebooking = await Booking.findByIdAndDelete(id);
    res.status(200).json(deleteBooking);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBooking,
  addBooking,
  deleteBooking,
  findOneBooking,
};
