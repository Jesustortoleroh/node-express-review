import express from "express";

const app = express();
const PORT = 3000;



// Parses the request body with Content-Type: application/json 
app.use(express.json());

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Ruta GET /users
app.get("/users", (req, res) => {
  res.send("Hello User route!");
});
// Ruta GET /users/:id
app.get("/users/:id", (req, res) => {
  console.log("=== REQUEST INFO ===");
  console.log("method:", req.method);
  console.log("url:", req.url);
  console.log("params:", req.params);
  console.log("query:", req.query);
  console.log("ip:", req.ip);
  console.log("headers:", req.headers);

  res.json({
    userId: req.params.id,
    query: req.query,
    message: "Hello User route!",
  });
});

// Routes 
app.post("/users", (req, res) => {
  console.log("Body recibido:", req.body);

  res.status(201).json({
    message: "Usuario creado",
    data: req.body,
  });
});

// Server listening 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});