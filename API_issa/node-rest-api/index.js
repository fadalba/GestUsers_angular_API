const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose
  .connect("mongodb+srv://issa:Iuw6uq1wdsgRYXQ4@cluster0.szgf3wm.mongodb.net/test")
  .then((x) => {
    console.log(
      `Connexion établie: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Erreur d'acces", err.reason);
  });

const bookRoute = require("./routes/book.routes");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// Static directory path
app.use(
  express.static(path.join(__dirname, "dist/angular-mean-crud-tutorial"))
);

// API root
app.use("/api", bookRoute);

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

// Base Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "dist/angular-mean-crud-tutorial/index.html")
  );
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
