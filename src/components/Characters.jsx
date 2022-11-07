import axios from "axios";
import React, { useEffect, useState } from "react";

const Characters = ({ characters }) => {
  const [character, setCharacte] = useState({});

  useEffect(() => {
    axios.get(characters).then((res) => setCharacte(res.data));
  }, []);

  console.log(character);

  return (
    <div className="card">
      <div className="card_landing">
        <img src={character.image} alt="" />
        <h5>{character.name} </h5>
        <div className="card_info">
          <p>
            <b>Descripcion</b>
          </p>
          <hr />
          <div className="description">
            
            <p>
              <b>Estatus: </b>
              {character.status}
            </p>
            <p>
              <b>Origen: </b>
              {character.origin?.name}
            </p>
            <p>
              <b>N° Apariciones: </b>
              {character.episode?.length}{" "}
              {character.episode?.length > 1 ? "Episodios" : "Episodio"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
