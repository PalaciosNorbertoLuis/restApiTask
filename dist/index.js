"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./database");

var _app = _interopRequireDefault(require("./app"));

_app["default"].listen(_app["default"].get("port"));

console.log("server on port", _app["default"].get("port"));