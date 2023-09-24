const { response } = require("express");

//import the todo model
const Todo = require("../models/Todo");


//define route handler
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from database
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is fetched",
    });
  } catch (err) {
    console.err(err);
    response.status(500).json({
      success: false,
      error: err.message,
      message: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //extract todo items basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //data forgiven id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given Id",
      });
    }

    //data for given id found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (err) {
    console.err(err);
    response.status(500).json({
      success: false,
      error: err.message,
      message: err.message,
    });
  }
};
