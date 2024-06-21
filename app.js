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
const Specialty = require("./Specialty/specialty.routes");
const { join } = require("node:path");
const staticPath = path.join(path.dirname(""), "static/images");
const connectDB = require("./dataBase");
const express = require("express");
const app = express();
const port = 1000;
connectDB();

// socket
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});

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
app.use("/specialty", Specialty);

app.listen(port, () => {
  console.log(`your port is ${port}`);
});
