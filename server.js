const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ Error:", err));

app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
