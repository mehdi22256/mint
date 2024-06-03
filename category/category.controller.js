const Category = require("../models/category");

const getallCategory = async (req, res, next) => {
  try {
    const getCategory = await Category.find();
    res.status(200).json({ getCategory });
  } catch (error) {
    next(error);
  }
};

const getoneCategory = async (req, res, next) => {
  try {
    const { CategoryId } = req.params;
    const getCategory = await Category.findOne({ _id: CategoryId });
    res.status(200).json({ getCategory });
  } catch (error) {
    next(error);
  }
};

const newCategory = async (req, res, next) => {
  try {
    const newcategory = req.body;
    const newCategory = await Category.create(newcategory);
    res.status(200).json({ newCategory });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { CategoryId } = req.params;
    const Categorydelete = await Category.deleteOne({ _id: CategoryId });
    res.json({ Categorydelete });
  } catch (error) {
    next(error);
  }
};

const updatCategory = async (req, res, next) => {
  try {
    const { CategoryId } = req.params;
    const Categoryupdute = await Category.updateOne(
      { _id: CategoryId },
      req.body,
      {
        new: true,
      }
    );
    res.json({ Categoryupdute });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updatCategory,
  deleteCategory,
  newCategory,
  getoneCategory,
  getallCategory,
};
