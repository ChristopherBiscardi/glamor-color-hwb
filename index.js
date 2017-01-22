"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = hwb;

var _reduceFunctionCall = require("reduce-function-call");

var _reduceFunctionCall2 = _interopRequireDefault(_reduceFunctionCall);

var _color = require("color");

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hwb(_ref) {
  var selector = _ref.selector,
      style = _ref.style;

  Object.entries(style).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        val = _ref3[1];

    if (val.includes("hwb(")) {
      style[key] = (0, _reduceFunctionCall2.default)(val, "hwb", function (body, fn) {
        return (0, _color2.default)(fn + "(" + body + ")").rgb().string();
      });
    }
  });
  return { selector: selector, style: style };
}