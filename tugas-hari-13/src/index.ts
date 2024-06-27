import express from "express"

const app = express();

// Endpoint untuk register user
app.post('/register', (req: any, res: any) => {
    const {username, password} = req.body
    // Logika untuk register user
    res.send('User registered')
})

// Endpoint untuk login user
app.post('/login', (req: any, res: any) => {
    const {username, password} = req.body;
    // Logika untuk login user
    res.send('User logged in');
})

app.listen(3000, () => {
    console.log(`Server is running at 3000`)
})