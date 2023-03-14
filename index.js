const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const CustomerSession = require("./CustomerSession");

const { Server } = require("socket.io");

const io = new Server(server);
const PORT = process.env.PORT || 4000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  const customerSession = new CustomerSession({ io });
  console.log("There has been a connection");
  socket.on("display_options_to_user", () => {
    socket.emit("show_options", customerSession.displayOptions());
  });
  socket.on("place_order", () => {
    console.log("An Order was placed");
    socket.emit("order_placed", customerSession.placeNewOrder());
  });
  socket.on("add_item_to_order", (menuItem) => {
    socket.emit(
      "item_added_to_order",
      customerSession.addItemToCurrentOrder(parseInt(menuItem))
    );
  });
  socket.on("view_order", () => {
    socket.emit("order_viewed", customerSession.viewCurrentOrder());
  });
  socket.on("cancel_order", () => {
    socket.emit("order_canceled", customerSession.cancelOrder());
  });
  socket.on("checkout_order", () => {
    socket.emit("order_checked_out", customerSession.checkoutOrder());
  });
  socket.on("view_order_history", () => {
    socket.emit("order_history_viewed", customerSession.viewOrderHistory());
  });
});

server.listen(PORT, () =>
  console.log(`Server is now listening on port ${PORT}...`)
);
