import React from "react";

function FilterButtons({ current, onFilterChange, onClearAll, onFastest  }) {
  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
      <div className="d-flex align-items-center gap-2">
        <label htmlFor="filtro" className="mb-0">Mostrar:</label>
        <select
          id="filtro"
          className="form-select form-select-sm"
          value={current}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="active">Pendientes</option>
        </select>
      </div>

      <div className="d-flex gap-2 flex-wrap">

  <button className="btn btn-custom btn-sm" onClick={onClearAll}>  Eliminar </button>
  <button className="btn btn-custom btn-sm" onClick={onFastest}> Rápida  </button>
      </div>
    </div>
  );
}

export default FilterButtons;
