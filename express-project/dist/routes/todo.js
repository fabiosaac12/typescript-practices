"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRoutes = void 0;
var express_1 = require("express");
exports.todoRoutes = express_1.Router();
exports.todoRoutes.get('/');
exports.todoRoutes.post('/');
exports.todoRoutes.patch('/:id');
exports.todoRoutes.delete('/:id');
