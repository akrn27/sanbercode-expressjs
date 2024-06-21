import express from 'express';
import {createProduct, getAllProducts, getProduct, updateProduct, deleteProduct} from "./controllers/products.controller";
import {createCategory, deleteCategory, getAllCategories, getCategory, updateCategory} from "./controllers/category.controller";

const router = express.Router();

// Products route
router.post('/product', createProduct);
router.get('/product', getAllProducts);
router.get('/product/:id', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

// Categories route
router.post('/category', createCategory);
router.get('/category', getAllCategories);
router.get('/category/:id', getCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

export default router;