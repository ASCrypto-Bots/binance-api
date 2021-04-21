"use strict";

var _express = _interopRequireDefault(require("express"));

var _configureExpress = _interopRequireDefault(require("./utils/configureExpress"));

var _connectMongo = _interopRequireDefault(require("./utils/connectMongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

(0, _connectMongo["default"])();
(0, _configureExpress["default"])((0, _express["default"])());
