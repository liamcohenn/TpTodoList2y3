import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 3) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <div className="formulario">
      <h1 className="titulo">Lista de Tareas</h1>
      <form className="formulario-tarea" onSubmit={handleSubmit}>
        <input
          type="text"
          className="entrada-tarea"
          placeholder="Introducir tarea"
          minLength="3"
          maxLength="100"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="boton-agregar" type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default TodoForm;
