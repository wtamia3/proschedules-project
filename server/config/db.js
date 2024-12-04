const app = require('./app');
const connectDB = require('./db');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const PORT = process.env.PORT || 5000;

// Connect to the database and start the server
const startServer = async () => {
  try {
    await connectDB(); // Connect to the database

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

startServer();
