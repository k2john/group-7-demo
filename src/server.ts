import http from "http";
import app from "./app";
import { initSocket } from "./sockets/socket";

const PORT = 3000;

const server = http.createServer(app);

// Init Socket.IO
initSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});