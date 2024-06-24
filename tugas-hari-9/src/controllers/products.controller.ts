import ProductsModel from "../models/products.model";
import {object, string, number} from 'yup';

let createValidationSchema = object().shape({
  name: string().required(),
  price: number().required(),
  categoryId: string().required(),
  description: string().required(),
  qty: number().required().min(1),
});

export const createProduct = async (req: any, res: any) => {
  try {
    await createValidationSchema.validate(req.body);
    const result = await ProductsModel.create(req.body);
    res.status(201).json({
      data: result,
      message: "Success create product",
    });
  } catch (error) {
    console.log("ERROR => ", error);
  }
};

export const getAllProducts = async (req: any, res: any) => {
  interface IPaginationQuery {
    page: number;
    limit: number;
    search?: string;
  }
  try {
    const {
      limit = 10,
      page = 1,
      search = "",
    } = req.query as unknown as IPaginationQuery;

    const query = {};

    if (search) {
      Object.assign(query, {
        name: { $regex: search, $options: "i" },
      });
    }
    const result = await ProductsModel.find(query)
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .populate("categoryId");
    const total = await ProductsModel.countDocuments(query);
    res.status(200).json({
      data: result,
      message: "Success get all products",
      page: +page,
      limit: +limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.log("ERROR =>", error);
  }
};

export const getProduct = async (req: any, res: any) => {
  try {
    const result = await ProductsModel.findOne({
      _id: req.params.id,
    });
    res.status(200).json({
      data: result,
      message: "Success get a product",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: any, res: any) => {
  try {
    const result = await ProductsModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      data: result,
      message: "Success update a product",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req: any, res: any) => {
  try {
    const result = await ProductsModel.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).json({
      data: result,
      message: "Success delete a product",
    });
  } catch (error) {
    console.log(error);
  }
};
