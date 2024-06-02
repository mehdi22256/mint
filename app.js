const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const userRoutes = require("./user/user.routes");
// const blogRoutes = require("./routes/blog.routes");
// const commentRoutes = require("./routes/comment.routes");
// const categoryRoutes = require("./routes/category.routes");
const staticPath = path.join(path.dirname(""), "static/images");
const connectDB = require("./dataBase");
const express = require("express");
const app = express();
const port = 1000;
const cors = require("cors");
const erroring = require("./middlewares/errorHandler");
app.use(express.json());
app.use(cors());

app.use("/image", express.static(staticPath));
app.use("/user", userRoutes);
// app.use("/blog", blogRoutes);
// app.use("/comment", commentRoutes);
// app.use("/category", categoryRoutes);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "server error" });
});

app.use(erroring);

connectDB();

app.listen(port, () => {
  console.log(`your port is ${port}`);
});
