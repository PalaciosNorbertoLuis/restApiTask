"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require('dotenv').config();

var _default = {
  mongoURL: process.env.MONGO_URI,
  port: process.env.PORT
};
exports["default"] = _default;