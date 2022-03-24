"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.fineOneTask = exports.findAllTask = exports.deleteTask = exports.createTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

var _getPagination2 = require("../libs/getPagination");

var findAllTask = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, title, condition, _getPagination, limit, offset, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, size = _req$query.size, page = _req$query.page, title = _req$query.title;
            condition = title ? {
              title: {
                $regex: new RegExp(title),
                $options: "i"
              }
            } : {};
            _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 6;
            return _Task["default"].paginate(condition, {
              offset: offset,
              limit: limit
            });

          case 6:
            data = _context.sent;
            res.json({
              totalItems: data.totalDocs,
              task: data.docs,
              totalPages: data.totalPages,
              currentPage: data.page
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || "error al consultar las tareas"
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function findAllTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.findAllTask = findAllTask;

var fineOneTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Task["default"].findById(id);

          case 4:
            task = _context2.sent;

            if (task) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "No hay tarea con el id ".concat(id)
            }));

          case 7:
            res.json(task);
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: _context2.t0.message || "error al consultar la tarea ".concat(id)
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));

  return function fineOneTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.fineOneTask = fineOneTask;

var createTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var newTask, taskSave;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (req.body.title) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", res.status(400).send({
              message: "titulo requerido!"
            }));

          case 2:
            _context3.prev = 2;
            newTask = new _Task["default"]({
              title: req.body.title,
              description: req.body.description
            });
            _context3.next = 6;
            return newTask.save();

          case 6:
            taskSave = _context3.sent;
            res.json(taskSave);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            res.status(500).json({
              message: _context3.t0.message || "error al intentar crear una tarea"
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));

  return function createTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Task["default"].findByIdAndDelete(req.params.id);

          case 3:
            res.json({
              message: "Registro eliminado correctamente"
            });
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0.message || "error al intentar borrar la tarea"
            });

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function deleteTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var updateTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Task["default"].findByIdAndUpdate(req.params.id, req.body);

          case 2:
            res.json({
              message: "Se actualizo de forma correcta el registro."
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;