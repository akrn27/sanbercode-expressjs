import ProductsModel from "../models/products.model";

export const createProduct = async (req: any, res: any) => {
    try {
        const result = await ProductsModel.create(req.body);
        res.status(201).json({
            data: result,
            message: "Success create product"
        })
    } catch (error) {
        console.log(error)
    }
}
export const getAllProducts = async (req: any, res: any) => {
    try {
        const result = await ProductsModel.find();
        res.status(200).json({
            data: result,
            message: "Success get all products"
        })
    } catch (error) {
        console.log(error)
    }
}
export const getProduct = async (req: any, res: any) => {
    try {
        const result = await ProductsModel.findOne({
            _id: req.params.id
        })
        res.status(200).json({
            data: result,
            message: "Success get a product"
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateProduct = async (req: any, res: any) => {
    try {
        const result = await ProductsModel.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {
                new: true,
            }
        )

        res.status(200).json({
            data: result,
            message: "Success update a product"
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteProduct = async (req: any, res: any) => {
    try {
        const result = await ProductsModel.findOneAndDelete({
            _id: req.params.id
        })
        res.status(200).json({
            data: result,
            message: "Success delete a product"
        })
    } catch (error) {
        console.log(error)
    }
}