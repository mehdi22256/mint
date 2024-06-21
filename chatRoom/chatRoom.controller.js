const ChatRoom = require("../models/chatRoom");

const getAllChatRooms = async (req, res, next) => {
  try {
    const getAll = await ChatRoom.find({});
    // .populate("sender")
    // .populate("receiver");
    res.status(200).json({ getAll });
  } catch (error) {
    next(error);
  }
};

const getOneChatRoom = async (req, res, next) => {
  try {
    const { id } = req.body;
    const one = await ChatRoom.find({ id });
    res.status(200).json(one);
  } catch (error) {
    next(error);
  }
};

const postChatRoom = async (req, res, next) => {
  try {
    const users = req.body;
    const chatroomId = users.join("-");

    const reversedArray = users.reverse();
    const reversed = reversedArray.join("-");

    let chatroom = await ChatRoom.findOne({ chatroomId } || { reversed });

    if (!chatroom) {
      chatroom = new ChatRoom({ chatroomId, users });
      await chatroom.save();
    }

    res.status(200).json({ chatroomId });
  } catch (error) {
    next(error);
  }
};

const putChatRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateChatRoom = await ChatRoom.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateChatRoom);
  } catch (error) {
    next(error);
  }
};

const deleteChatRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteChatRoom = await ChatRoom.findByIdAndDelete(id);
    res.status(200).json(deleteChatRoom);
  } catch (error) {
    next(error);
  }
};

const searchChatRoom = async (req, res, next) => {
  try {
    const searching = req.params.word;
    const searchedChatRoom = await ChatRoom.find({
      text: { $regex: searching, $options: "i" },
    });
    res.status(200).json(searchedChatRoom);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllChatRooms,
  getOneChatRoom,
  postChatRoom,
  putChatRoom,
  deleteChatRoom,
  searchChatRoom,
};
