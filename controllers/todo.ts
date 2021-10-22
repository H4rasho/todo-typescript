import { Request, Response } from "express";
let ObjectID = require("mongodb").ObjectId;

import { Todo } from "../models/Todo";

export const crearTodo = async (req: Request, res: Response) => {
  const todo = new Todo(req.body);

  try {
    todo.vigencia = true;
    const todoDB = await todo.save();
    res.status(201).json({
      ok: true,
      todoDB,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Porfavor hable con el administrador",
    });
  }
};

export const obtenerTodos = async (req: Request, res: Response) => {
  try {
    const todos: {} = await Todo.find({ vigencia: true });
    if (!todos) {
      return res.status(404).json({
        ok: false,
        msg: "no existen todos",
      });
    }
    res.json({
      ok: true,
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Profavor hable con el admministrador",
    });
  }
};

export const actualizarTodo = async (req: Request, res: Response) => {
  const todoId = req.params.id;

  if (!ObjectID.isValid(todoId)) {
    return res.status(404).json({
      ok: false,
      msg: "Id de todo no válido",
    });
  }
  try {
    const todoDB = await Todo.findById(todoId);
    if (!todoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No existe todo por ese id",
      });
    }
    const newTodo = {
      vigencia: false,
    };
    const todoUpdated = await Todo.findByIdAndUpdate(todoId, newTodo, {
      new: true,
    });
    res.json({
      ok: true,
      todo: todoUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: "false",
      msg: "Porfavor hable con el admministrador",
    });
  }
};

export const actualizarTodoText = async (req: Request, res: Response) => {
  const todoId = req.params.id;

  if (!ObjectID.isValid(todoId)) {
    return res.status(404).json({
      ok: false,
      msg: "Id de todo no válido",
    });
  }
  try {
    const todoDB = await Todo.findById(todoId);
    if (!todoDB) {
      return res.status(404).json({
        ok: false,
        msg: "No existe todo por ese id",
      });
    }
    const newTodo = {
      text: req.body.text,
    };
    const todoUpdated = await Todo.findByIdAndUpdate(todoId, newTodo, {
      new: true,
    });
    res.json({
      ok: true,
      todo: todoUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: "false",
      msg: "Porfavor hable con el admministrador",
    });
  }
};
