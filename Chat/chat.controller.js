const Chat = require("../models/chat");

const getAllChat = async (req, res, next) => {
  try {
    const allChat = await Chat.find();
    res.status(200).json({ allChat });
  } catch (error) {
    next(error);
  }
};

const getAllChatBychatRoomId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getOne = await Chat.find({ chatroom: id });
    return res.status(200).json({ getOne });
  } catch (error) {
    next(error);
  }
};

const addChat = async (req, res, next) => {
  try {
    const addchat = await Chat.create({ ...req.body, user: req.user.id });
    return res.status(200).json({ addchat });
  } catch (error) {
    next(error);
  }
};
const deleteChat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletechat = await Chat.findByIdAndDelete(id);
    res.status(200).json(deletechat);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllChat,
  deleteChat,
  addChat,
  getAllChatBychatRoomId,
};
