import express from "express";
import {createCategory, getAllCategories, getCategory, updateCategory, deleteCategory} from "./controllers/category.controller";
import {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct} from "./controllers/product.controller";

const router = express.Router();

// Category
router.post('/category', createCategory)
router.get('/category',  getAllCategories)
router.get('/category/:id',  getCategory)
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

// Products
router.post('/product', createProduct)
router.get('/product', getAllProducts);
router.get('/product/:id', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;