const chat = require("../models/chat");

const getAllChat = async (req, res, next) => {
  try {
    const allChat = await chat.find();
    res.status(200).json({ allChat });
  } catch (error) {
    next(error);
  }
};

const getOneChat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getone = await chat.find(id);
    return res.status(200).json({ getone });
  } catch (error) {
    next(error);
  }
};

const addChat = async (req, res, next) => {
  try {
    const addchat = await chat.create(req.body);
    return res.status(200).json({ addchat });
  } catch (error) {
    next(error);
  }
};
const deleteChat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletechat = await Booking.findByIdAndDelete(id);
    res.status(200).json(deletechat);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllChat,
  deleteChat,
  addChat,
};
