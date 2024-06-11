const { models } = require("mongoose");

const Comments = require("../models/comments");

async function getAllComment(req, res, next) {
  try {
    const getComment = await Comments.find();
    res.status(201).json(getComment);
  } catch (error) {
    next(error);
  }
}

async function getCommentById(req, res, next) {
  try {
    const { id } = req.params;
    const commentById = await Comments.findById(id);
    res.status(201).json(commentById);
  } catch (error) {
    next(error);
  }
}

async function createComment(req, res, next) {
  try {
    const newComment = await Comments.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
}

async function deleteComment(req, res, next) {
  try {
    const { id } = req.params;
    await Comments.findByIdAndDelete(id);
    res.status(201).json({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
}

async function updateComment(req, res, next) {
  try {
    const idComment = req.params.id;
    const commentUpdate = req.body;
    const newUpdateComment = await Comments.findByIdAndUpdate(
      idComment,
      commentUpdate,
      { new: true }
    );
    res.status(201).json(newUpdateComment);
  } catch (error) {
    next(error);
  }
}

async function getAllCommentsByBlogId(req, res, next) {
  try {
    const blogId = req.params.id;

    const commentid = await Comments.find({ blog: blogId });

    res.status(201).json(commentid);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllComment,
  getCommentById,
  createComment,
  deleteComment,
  updateComment,
  getAllCommentsByBlogId,
};
