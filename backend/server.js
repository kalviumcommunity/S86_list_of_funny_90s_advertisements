const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const advertisementRoutes = require("./routes/ads");
const authRoutes = require('./routes/auth')
const entityRoutes = require('./routes/sqlEntities');
const { authenticateDatabase } = require('./sqlConfig/mysql');

require('./Models/sqlAssociations');

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // or your frontend URL
  credentials: true
}));

app.use(cookieParser());
app.use("/ads", advertisementRoutes);
app.use("/auth", authRoutes);
app.use("/api", entityRoutes);


dotenv.config();

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {  
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});


authenticateDatabase();


// Define a simple /ping route
app.get("/ping", (req, res) => {
    res.json({ message: "Pong! Server is running." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




