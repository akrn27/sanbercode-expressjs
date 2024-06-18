const express = require('express');
const app = express();

app.use(express.json());

// Inisialisasi Awal Products
let products = [
    {id: 1, name: 'Speaker', category: 'Electronic'},
    {id: 2, name: 'Ak47', category: 'Weapon'},
    {id: 3, name: 'Laptop', category: 'Electronic'},
    {id: 4, name: 'Faucet', category: 'Plumbing'},
    {id: 5, name: 'Fridge', category: 'Appliance'},
]

// Get all products | Question 1
app.get('/api/products', (req: any, res: any) => {
    res.json(products);
})

// Get product by ID | Question 2
app.get('/api/products/:id', (req: any, res: any) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => (p.id === productId));
    if(product) {
        res.json(product);
    }else{
        res.status(404).json({message: 'Product not found'})
    }
})

// Post a product | Question 3
app.post('/api/products', (req: any, res: any) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
})

// Put a product | Question 4
app.put('/api/products/:id', (req: any, res: any) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => (p.id === productId));
    if(productIndex !== -1){
        products[productIndex] = {id: productId, ...req.body};
        res.json(products[productIndex]);
    }else{
        res.status(404).json({message: 'Product not found'})
    }
})

// Delete a product | Question 5
app.delete('/api/products/:id', (req: any, res: any) => {
    const productId = parseInt(req.params.id);
    products = products.filter((p) => (p.id !== productId));
    res.status(204).json({message: "Product deleted successfully"});
})

// Route GET with Query String | Question 6
app.get('/api/product', (req: any, res: any) => {
    const searchTerm = req.query.name?.toLowerCase();

    const filteredProducts = products.filter((product) => (
        product.name.toLowerCase().includes(searchTerm)
    ));

    if(filteredProducts.length > 0){
        res.status(200).json(filteredProducts);
    }else{
        res.status(404).json({message: 'No products found with that name'})
    }
})

// Route GET with parameter and query string by specific category and by name | Question 7
app.get('/api/product/:category', (req: any, res: any) => {
    const category = req.params.category;
    const searchTerm = req.query.name?.toLowerCase();

    const filteredProducts = products.filter((product) => (
        product.category.toLowerCase() === category && (searchTerm ? product.name.toLowerCase().includes(searchTerm) : true)
    ))

    if(filteredProducts.length > 0) {
        res.status(200).json(filteredProducts);
    }else{
        res.status(404).json({message: 'No products found in that category'})
    }
})

// Server listening
app.listen('3002', () => {
    console.log(`Server is running at 3002`)
})