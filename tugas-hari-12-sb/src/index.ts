import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk register user
app.post('/register', (req: any, res: any) => {
    const {username, password} = req.body;
    // Logika untuk register user
    res.send('User registered');
})

// Endpoint untuk login user
app.post('/login', (req: any, res: any) => {
    const {username, password} = req.body;
    // Logika untuk login user
    res.send('User logged in')
})

// Endpoint untuk menambah produk
app.post('/products', (req: any, res: any) => {
    const {name, price} = req.body;
    // Logika untuk menambah produk
    res.send('Product added');
})

// Endpoint untuk mendapatkan semua produk
app.get('/products', (req: any, res: any) => {
    // Logika untuk mendapatkan semua produk
    res.send('List of products');
})

// Endpoint untuk membuat order
app.post('/orders', (req: any, res: any) => {
    const {productId, quantity} = req.body;
    // Logika untuk membuat order
    res.send('Order created')
})

// Endpoint untuk mendapatkan semua order
app.get('/orders', (req: any, res: any) => {
    // Logika untuk mendapatkan semua order
    res.send('List of orders');
})

// Endpoint untuk memperbaiki semua bug secara otomatis :v
app.get('/fixallbugs', (req: any, res: any) => {
    res.send('All bugs have been fixed automatically')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})