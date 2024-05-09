import React from "react";
import Cards from "./Cards";

const ContenedorPersonajes = ({ personajes }) => {
  return (
    <div className="row">
      {personajes.length === 0 ? (
        <div>Cargando...</div>
      ) : (
        personajes.map((item) => <Cards key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ContenedorPersonajes;
