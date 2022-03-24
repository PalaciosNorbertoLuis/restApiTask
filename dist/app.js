"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

var _config = _interopRequireDefault(require("./config"));

var _cors = _interopRequireDefault(require("cors"));

var app = (0, _express["default"])(); //setings

app.set("port", _config["default"].port); //middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //rutas

app.get("/", function (req, res) {
  //res.redirect("/api/tasks");
  res.json({
    mesagge: "Hola mundo"
  });
});
app.use("/api/tasks", _tasks["default"]);
var _default = app;
exports["default"] = _default;