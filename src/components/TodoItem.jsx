import React from "react";

function TodoItem({ tarea, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${tarea.completed ? "completada" : ""}`}>
      <div className="contenido">
        <span className="texto" style={{ textDecoration: tarea.completed ? "line-through" : "none" }}>
          {tarea.text}
        </span>
        <div className="fechas">
          <small>Creada: {new Date(tarea.id).toLocaleDateString()}</small>
          {tarea.completed && (
            <small> | Finalizada: {new Date().toLocaleDateString()}</small>
          )}
        </div>
      </div>
      <div className="botones">
        <button className="btn-completar" onClick={onToggle}>Completar</button>
        <button className="btn-eliminar" onClick={onDelete}>Eliminar</button>
      </div>
    </li>
  );
}

export default TodoItem;
