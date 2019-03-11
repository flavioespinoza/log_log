"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _ololog = _interopRequireDefault(require("ololog"));

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require('ansicolor').nice;
var _log = {
  deep: function deep(data) {
    var options = {
      showHidden: false,
      depth: null,
      colors: true
    };

    var inspect = _util.default.inspect(data, options);

    console.log(inspect);
  },
  info: function info(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log(" Info: ".concat(msg, " ").bgBlue.white);
  },
  error: function error(msg) {
    _ololog.default.lightYellow('ERROR: ', msg);
  },
  alert: function alert(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log(" Alert: ".concat(msg, " ").bgYellow.black);
  },
  warn: function warn(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log(" Warn: ".concat(msg, " ").bgMagenta.white);
  },
  blue: function blue(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log("".concat(msg, " ").bgBlue.black);
  },
  red: function red(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log("".concat(msg, " ").bgRed.black);
  },
  green: function green(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log("".concat(msg, " ").bgGreen.black);
  },
  pink: function pink(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log("".concat(msg, " ").bgLightRed.black);
  },
  yellow: function yellow(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log("".concat(msg, " ").bgLightYellow.white);
  },
  violet: function violet(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log("".concat(msg, " ").bgLightMagenta.black);
  },
  cyan: function cyan(msg) {
    if (_typeof(msg) === 'object') {
      msg = _lodash.default.toString(msg);
    }

    console.log("".concat(msg, " ").bgCyan.black);
  },
  assert: function assert(item, item_name) {
    if (item) {
      var msg = " SUCCESS: ".concat(item_name, " = ").concat(item, " ");
      console.log("ASSERT", msg.bgCyan.black);
    } else {
      var _msg = " FAIL: ".concat(item_name, " = ").concat(item, " ");

      console.log("ASSERT", _msg.bgRed.black);
    }
  },
  timer: function timer(method, method_name) {
    console.time("Timer ".concat(method_name, "()"));
    method();
    console.timeEnd("Timer ".concat(method_name, "()"));
  }
};
module.exports = _log;