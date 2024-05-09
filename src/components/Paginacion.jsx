import React from "react";

const Paginacion = ({ onSiguiente, onAnterior, paginacion }) => {
  const { next, prev } = paginacion;
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center mt-4">
          {prev === null ? (
            <button className="btn btn-warning disabled" onClick={onAnterior}>
              Anterior
            </button>
          ) : (
            <button className="btn btn-warning" onClick={onAnterior}>
              Anterior
            </button>
          )}
          {next === null ? (
            <button
              className="btn btn-primary ms-3 disabled"
              onClick={onSiguiente}
            >
              Siguiente
            </button>
          ) : (
            <button className="btn btn-primary ms-3" onClick={onSiguiente}>
              Siguiente
            </button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Paginacion;
