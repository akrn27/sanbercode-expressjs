import CategoryModel from "../models/category.model";

export const createCategory = async (req: any, res: any) => {
  try {
    const result = await CategoryModel.create(req.body);
    res.status(201).json({
      data: result,
      message: "Success create a category",
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllCategories = async (req: any, res: any) => {
  try {
    const result = await CategoryModel.find();
    res.status(200).json({
      data: result,
      message: "Success get all category",
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCategory = async (req: any, res: any) => {
  try {
    const result = await CategoryModel.findOne({
      _id: req.params.id,
    });
    res.status(200).json({
      data: result,
      message: "Success get a category",
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateCategory = async (req: any, res: any) => {
  try {
    const result = await CategoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      data: result,
      message: "Success update a category",
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteCategory = async (req: any, res: any) => {
  try {
    const result = await CategoryModel.findOneAndDelete({
      _id: req.params.id,
    });

    res.status(200).json({
      data: result,
      message: "Success delete a category",
    });
  } catch (error) {
    console.log(error);
  }
};
