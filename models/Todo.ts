import { Schema, model } from "mongoose";

interface Todo {
  text: string;
  vigencia: boolean;
}

const TodoSchema = new Schema<Todo>({
  text: { type: String, required: true },
  vigencia: { type: Boolean, required: true },
});

TodoSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export const Todo = model<Todo>("Todo", TodoSchema);
