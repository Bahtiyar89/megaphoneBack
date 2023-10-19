const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

//database
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bahtiyar1989:Lenovo2017@cluster0.4okvoz0.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("database is connected successfully!");
  } catch (err) {
    console.log(err);
  }
};

//middlewares
dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("app is running on port " + process.env.PORT);
});
