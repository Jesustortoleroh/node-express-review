import express from "express";

const app = express();
const PORT = 3000;

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
});

// ========================
// ROUTES
// ========================

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Users route
app.get("/users", (req, res) => {
  res.send("Hello User route!");
});

// Express parameter + request inspection 
app.get("/users/:id", (req, res) => {
  // Log request object info (guide step 04)
  console.log("=== REQUEST INFO ===");
  console.log("method:", req.method);
  console.log("url:", req.url);
  console.log("params:", req.params);
  console.log("query:", req.query);
  console.log("headers:", req.headers);
  console.log("body:", req.body);
  console.log("ip:", req.ip);
  console.log("cookies:", req.cookies);

  // JSON response 
  res.json({ userId: req.params.id, message: "Hello User route!" });
});

// POST route for form submissions 
app.post("/users", (req, res) => {
  res.send("Hello User route!");
});

// ========================
// SERVER
// ========================

// Start server on port 3000 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});