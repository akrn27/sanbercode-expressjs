import express from 'express';

const app = express();

// Endpoint untuk menambah produk
app.post('/products', (req: any, res: any) => {
    const {name, price} = req.body;
    // Logika untuk menambah produk
    res.send('Product added');
})

// Endpoint untuk mendapatkan semua produk
app.get('/products', (req: any, res: any) => {
    // Logika untuk mendapatkan semua produk
    res.send('List of products')
})