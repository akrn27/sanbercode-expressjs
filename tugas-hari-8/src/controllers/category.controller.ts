import categoryModel from "../models/category.model";

export const createCategory = async (req: any, res: any) => {
  try {
    const result = await categoryModel.create(req.body);
    res.status(201).json({ data: result, message: "Success create category" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategories = async (req: any, res: any) => {
  try {
    const categories = await categoryModel.find();
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

export const getCategory = async (req: any, res: any) => {
  try {
    const result = await categoryModel.findOne({
      _id: req.params.id,
    });
    res.status(200).json({
      data: result,
      message: "Success get one product",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (req: any, res: any) => {
  try {
    const result = await categoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      data: result,
      message: "Success update product",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (req: any, res: any) => {
  try {
    const result = await categoryModel.findOneAndDelete({
      _id: req.params.id,
    });

    res.status(200).json({
      data: result,
      message: "Success delete product",
    });
  } catch (error) {
    console.log(error);
  }
};
