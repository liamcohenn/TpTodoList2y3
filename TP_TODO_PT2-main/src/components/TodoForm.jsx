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
    <>
      <h1 className="mb-4">🌸 Lista de Tareas 🌸</h1>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Introducir tarea"
          minLength="3"
          maxLength="100"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="btn btn-custom" type="submit">Agregar</button>
      </form>
    </>
  );
}

export default TodoForm;
