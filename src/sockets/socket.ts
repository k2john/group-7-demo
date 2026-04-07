import { Server } from "socket.io";

export const initSocket = (server: any) => {
  const io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("message", (data) => {
      console.log("Message:", data);

      // Broadcast to all clients
      io.emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};