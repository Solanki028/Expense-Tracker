// Load environment variables from the .env file
const dotenv = require("dotenv");
dotenv.config(); // This should load the environment variables before using them

// Required dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const path = require("path");

// Ensure .env is loaded and contains required variables
console.log("MongoDB URL:", process.env.MONGO_URL);  // Log the MongoDB URL to verify

// Database call using the connection URL from .env
connectDb();

// Rest object
const app = express();

// Middlewares
app.use(morgan("dev")); // Log HTTP requests in the console
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Routes
app.use("/api/v1/users", require("./routes/userRoute")); // User routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes")); // Transactions routes

// Serve static files in production
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Port configuration (either from .env or default to 8080)
const PORT = process.env.PORT || 8080;

// Listen for requests on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.green);
});
