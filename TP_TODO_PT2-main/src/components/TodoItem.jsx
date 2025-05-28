import React from "react";

function TodoItem({ tarea, onToggle, onDelete }) {
  return (
    <li className={`todo-item list-group-item d-flex justify-content-between align-items-center ${tarea.completed ? "completada" : ""}`}>
      <div>
        <span style={{ textDecoration: tarea.completed ? "line-through" : "none" }}>
          {tarea.text}
        </span>
        <div className="fechas">
          <small>Creada: {new Date(tarea.id).toLocaleDateString()}</small>
          {tarea.completed && (
            <small> | Finalizada: {new Date().toLocaleDateString()}</small>
          )}
        </div>
      </div>
      <div className="btn-group">
        <button className="btn btn-sm btn-outline-success" onClick={onToggle}> ✅ </button>
        <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>🗑️ </button>
      </div>
    </li>
  );
}

export default TodoItem;
