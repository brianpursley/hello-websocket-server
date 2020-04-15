const WebSocket = require ("ws");

const WS_PORT = process.env.WS_PORT || 8888;

const server = new WebSocket.Server({ port: WS_PORT })

server.on("connection", (socket, request) => {
  console.log("New connection with path", request.url, "and headers:")
  console.log(request.headers);
  socket.on("message", msg => {
    console.log("Received message:", msg);
    if (msg == "close") {
      socket.close();
    } else {
      socket.send("hello, " + msg);
    }
  });
  socket.on("close", (code, reason) => {
    console.log("Connection closed with code =", code, ", reason =", reason);
  })
  socket.on("error", err => {
    console.error("Socket Error:", err);
  })
});

server.on("error", () => {
  console.error("Server Error:", err);
});

server.on("listening", () => {
  console.log("Server listening on port", WS_PORT);
});
