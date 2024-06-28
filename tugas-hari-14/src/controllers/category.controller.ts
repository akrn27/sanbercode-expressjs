import categoryModel from "../models/category.model";
import { Request, Response } from "express";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const result = await categoryModel.create(req.body);
        res.status(201).json({
            data: result,
            msg: 'Created a category successfully'
        })        
    } catch (error) {
        console.log(error)
    }
}

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const result = await categoryModel.find()
        res.status(200).json({
            data: result,
            msg: 'Get a category successfully'
        })
    } catch (error) {
        console.log(error)
    }
}

export const getCategory = async (req: Request, res: Response) => {
    try {
        const result = await categoryModel.findOne({_id: req.params.id})
        res.status(200).json({
            data: result,
            msg: 'Get all categories successfully'
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const result = await categoryModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.status(200).json({
            data: result,
            msg: 'Update a category successfully'
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const result = await categoryModel.findOneAndDelete({_id: req.params.id})
        res.status(200).json({
            data: result,
            msg: "Deleted a category successfully"
        })
    } catch (error) {
        console.log(error)
    }
}