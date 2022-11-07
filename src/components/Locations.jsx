import axios from "axios";
import React, { useEffect, useState } from "react";
import Characters from "./Characters";

const Locations = () => {
  const [locations, setLocations] = useState({});
  const [typeId, setTypeId] = useState("Escriba id (1 - 126)");

  useEffect(() => {
    const randomLocation = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then((res) => setLocations(res.data));
  }, []);

  const serchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then((res) => setLocations(res.data));
  };
  console.log(locations);

  return (
    <div>
      <h1>Rick and Morty Wiki</h1>
      <div className="serch">
        <input
          type="search"
          value={typeId}
          onChange={(e) => setTypeId(e.target.value)}
        />
        <button onClick={serchLocation}>Buscar</button>
      </div>
      <h2>{locations.name}</h2>

      <div className="location_info">
        <p>
          <b>Tipo: </b>
          {locations.type}
        </p>
        <p>
          <b>Dimension: </b>
          {locations.dimension}
        </p>
        <p>
          <b>Residentes: </b>
          {locations.residents?.length}
        </p>
      </div>

      <ul>
        {locations.residents?.map((location) => (
          <Characters characters={location} key={location} />
        ))}
      </ul>
    </div>
  );
};

export default Locations;
