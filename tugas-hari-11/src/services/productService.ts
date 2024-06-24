import {Product} from '../models/product';

export const addProduct = (products: Product[], newProduct: Product): Product[] => {
    return [...products, newProduct]
}

export const removeProduct = (products: Product[], productId: number): Product[] => {
    return products.filter(product => product.id !== productId)
}

export const updateProduct = (products: Product[], updateProduct: Product): Product[] => {
    return products.map(product => product.id === updateProduct.id ? updateProduct : product)
}

export const getProducts = (products: Product[]): Product[] => {
    return products;
}