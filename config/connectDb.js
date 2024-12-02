const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    // Get the MongoDB URL from the environment variables
    const dbUrl = process.env.MONGO_URL || "mongodb://localhost:27017/ExpenseTrackerapp"; // Fallback to localhost if not set
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${mongoose.connection.host}`.bgCyan.white); // Success message
  } catch (error) {
    console.log(`${error}`.bgRed); // Error message
  }
};

module.exports = connectDb;
