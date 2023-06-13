const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRouter = require("./routes/userRoutes");
const jobRouter = require("./routes/jobRoute");

dotenv.config();

const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

app.use(cors());
app.use(express.json());

app.use("/api/v1/posts", jobRouter);
app.use("/api/v1/users", userRouter);

// Mount REST on /api

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
