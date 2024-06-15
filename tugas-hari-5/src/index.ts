import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next();
})

app.use(express.static(path.join(__dirname, '../public')));

app.get("/hello", (req, res) => {
  const data = {
    message: "Success fetch message",
    data: "Hello World!",
  };
  res.json(data);
});

app.get("/user", (req, res) => {
  const data = {
    message: "Success fetch user",
    data: {
      id: 1,
      name: "Budi",
      username: "budidu",
      email: "budidu@mail.com",
    },
  };
  res.json(data)
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
