/*
    todo routes
    /api/todo
*/
import { Router } from "express";
import {
  actualizarTodo,
  actualizarTodoText,
  crearTodo,
  obtenerTodos,
} from "../controllers/todo";

export const router = Router();

router.post("/", crearTodo);
router.get("/", obtenerTodos);
router.put("/delete/:id", actualizarTodo);
router.put("/update/:id", actualizarTodoText);
