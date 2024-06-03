const { models } = require("mongoose");
const Blog = require("../models/blogs");
const { json } = require("express");

async function getAllBlog(req, res, next) {
  try {
    const getBlog = await Blog.find();
    res.status(201).json(getBlog);
  } catch (error) {
    next(error);
  }
}

async function getBlogById(req, res, next) {
  try {
    const id = req.params.id;
    const blogById = await Blog.findById(id);

    res.status(201).json(blogById);
  } catch (error) {
    next(error);
  }
}

async function createPostBlog(req, res, next) {
  try {
    const imageFile = req.file;
    if (!imageFile) {
      throw new Error("image file not found");
    }
    const imageUrl = "images/" + imageFile.filename;
    const newBlog = await Blog.create({
      ...req.body,
      image: imageUrl,
    });
    res.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
}

async function deletePostBlog(req, res, next) {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(201).json("deleted Done");
  } catch (error) {
    next(error);
  }
}

async function updatePostBlog(req, res, next) {
  try {
    const idBlog = req.params.id;
    const updatePostData = req.body;
    const foundPost = await Blog.findByIdAndUpdate(idBlog, updatePostData, {
      new: true,
    });
    if (!foundPost) {
      return res.status(400).json({
        message: `Oops, it seems like the post you're looking for is not there`,
      });
    }
    return res.status(200).json({ UpdatePost: foundPost });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllBlog,
  getBlogById,
  createPostBlog,
  deletePostBlog,
  updatePostBlog,
};
