import React from "react";

function FilterButtons({ current, onFilterChange, onClearAll, onFastest }) {
  return (
    <div className="filtros-contenedor">
      <div className="filtro-select">
        <label htmlFor="filtro" className="etiqueta-filtro">Mostrar:</label>
        <select
          id="filtro"
          className="selector-filtro"
          value={current}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="active">Pendientes</option>
        </select>
      </div>

      <div className="filtro-botones">
        <button className="boton-filtro" onClick={onClearAll}>Eliminar</button>
        <button className="boton-filtro" onClick={onFastest}>Rápida</button>
      </div>
    </div>
  );
}

export default FilterButtons;
