import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul id="taskList" className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          tarea={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}
export default TodoList;
