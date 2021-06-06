"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosDelete = exports.todosPatch = exports.todosGet = exports.todosPost = void 0;
var todos = [];
var todosPost = function (req, res) {
    var text = req.body.text;
    var newTodo = {
        id: String(new Date().getTime()),
        text: text,
    };
    todos = __spreadArray(__spreadArray([], todos), [newTodo]);
    res
        .status(201)
        .json({ message: 'todo successfully created', payload: newTodo });
};
exports.todosPost = todosPost;
var todosGet = function (_, res) {
    res.json(todos);
};
exports.todosGet = todosGet;
var todosPatch = function (req, res) {
    var id = req.params.id;
    var text = req.body.text;
    var updatedTodo = { id: id, text: text };
    todos = __spreadArray(__spreadArray([], todos.filter(function (todo) { return todo.id !== id; })), [updatedTodo]);
    res.json({ message: 'todo successfully updated', payload: updatedTodo });
};
exports.todosPatch = todosPatch;
var todosDelete = function (req, res) {
    var id = req.params.id;
    var todoToDelete = todos.find(function (todo) { return todo.id === id; });
    todos = todos.filter(function (todo) { return todo.id !== id; });
    res.json({ message: 'todo successfully updated', payload: todoToDelete });
};
exports.todosDelete = todosDelete;
