const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const blogRoutes = require("./blog/blog.routes");
const commentRoutes = require("./comments/commeint.routes");
const userRoutes = require("./user/user.routes");
const chatRoomRoutes = require("./chatRoom/chatRoom.routes");
const categoryRoutes = require("./category/category.routes");
const Role = require("./Roles/Roles.routes");
const Booking = require("./Booking/Booking.routes");
const chat = require("./Chat/chat.routes");
const location = require("./location/location.routes");

const staticPath = path.join(path.dirname(""), "static/images");
const connectDB = require("./dataBase");
const express = require("express");
const app = express();
const port = 1000;
const cors = require("cors");
const erroring = require("./middlewares/errorHandler");
app.use(express.json());
app.use(cors());
connectDB();

app.use("/blog", blogRoutes);
app.use("/comment", commentRoutes);
app.use("/image", express.static(staticPath));
app.use("/user", userRoutes);
app.use("/chatroom", chatRoomRoutes);
app.use("/category", categoryRoutes);
app.use("/role", Role);
app.use("/booking", Booking);
app.use("/chat", chat);
app.use("/location", location);

// app.use((err, req, res, next) => {
//   res
//     .status(err.status || 500)
//     .json({ message: err.message || "server error" });
// });

// app.use(erroring);

app.listen(port, () => {
  console.log(`your port is ${port}`);
});
