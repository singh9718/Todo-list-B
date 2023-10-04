const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controller/createTodo");
const { getTodo, getTodoById } = require("../controller/getTodo");
const { updateTodo } = require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");
const { signup } = require("../controller/signup");
const { login } = require("../controller/login");

const { generateToken } = require('../utils/auth');

//define Api routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.post("/signup", signup);
router.post('/login', login);

module.exports = router;
