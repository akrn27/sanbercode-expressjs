import * as Yup from "yup";
import productsModel from "../models/products.model";
import cloudinary from "../utils/cloudinary";

const createValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().required(),
  qty: Yup.number().required(),
  image: Yup.string().required(),
  categoryId: Yup.string().required(),
});

export const createProduct = async (req: any, res: any) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = uploadResult.url || uploadResult.secure_url;

    const newProduct = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      qty: req.body.qty,
      image: imageUrl,
      categoryId: req.body.categoryId,
    };

    await createValidationSchema.validate(newProduct);
    const result = await productsModel.create(newProduct);
    res.status(201).json({
      data: result,
      msg: "Created a data successfully",
    });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      res.status(400).json({
        data: error.errors,
        message: "Failed create product",
      });
      return;
    }

    console.log(error);
  }
};

interface IpaginationQuery {
  page: number;
  limit: number;
  search?: string;
}

export const getAllProducts = async (req: any, res: any) => {
  try {
    const {
      limit = 10,
      page = 1,
      search = "",
    } = req.query as unknown as IpaginationQuery;

    const query = {};

    if (search) {
      Object.assign(query, {
        name: { $regex: search, $options: "i" },
      });
    }

    const result = await productsModel
      .find(query)
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 })
      .populate("categoryId");

    const total = await productsModel.countDocuments(query);

    res.status(200).json({
      data: result,
      page: +page,
      limit: +limit,
      total,
      totalPages: Math.ceil(total / limit),
      msg: "Get all products successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (req: any, res: any) => {
  try {
    const result = await productsModel.findOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
      msg: "Get a product successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: any, res: any) => {
  try {
    const result = await productsModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      data: result,
      msg: "Update a product successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req: any, res: any) => {
  try {
    const result = await productsModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      data: result,
      msg: "Deleted a product successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
