import React, { useState, useEffect } from "react";
import provinciasData from "../provincias.json";
import localidadesData from "../localidades.json";
import Weather from "./Weather";

function BusquedaClima({ weatherdata }) {
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState("");
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState(null); // Inicialmente nulo
  const [municipiosFiltrados, setMunicipiosFiltrados] = useState([]);
  const [municipioInput, setMunicipioInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (provinciaSeleccionada) {
      const filteredMunicipios = localidadesData.localidades.filter(
        (municipio) => municipio.provincia.nombre === provinciaSeleccionada
      );

      if (municipioInput === "") {
        setMunicipiosFiltrados(filteredMunicipios);
      }
    }
  }, [provinciaSeleccionada, municipioInput]);

  const handleProvinciaChange = (e) => {
    setProvinciaSeleccionada(e.target.value);
    setMunicipioSeleccionado(null); // Reiniciar el municipio seleccionado al cambiar la provincia
    setMunicipioInput("");
    setMunicipioInput("");
    setMunicipiosFiltrados([]);
  };

  const handleMunicipioChange = (e) => {
    const inputText = e.target.value;
    setMunicipioInput(inputText);

    if (inputText === "") {
      setMunicipiosFiltrados([]);
      setShowDropdown(true);
      return;
    }

    const filteredMunicipios = localidadesData.localidades.filter(
      (municipio) =>
        municipio.provincia.nombre === provinciaSeleccionada &&
        municipio.nombre.toLowerCase().includes(inputText.toLowerCase())
    );

    setMunicipiosFiltrados(filteredMunicipios.slice(0, 10));
    setShowDropdown(true);
  };

  const handleMunicipioSelect = (selectedMunicipio) => {
    // Encuentra el objeto completo del municipio seleccionado
    const municipioCompleto = localidadesData.localidades.find(
      (municipio) =>
        municipio.provincia.nombre === provinciaSeleccionada &&
        municipio.nombre === selectedMunicipio
    );
    setMunicipioSeleccionado(municipioCompleto);
    setMunicipioInput(selectedMunicipio.toLowerCase());
    setMunicipiosFiltrados([]);
    setShowDropdown(false);
  };

  return (
    <div>
      <label>Provincia:</label>
      <select onChange={handleProvinciaChange}>
        <option value="">Seleccione una provincia</option>
        {provinciasData.provincias.map((provincia) => (
          <option key={provincia.id} value={provincia.nombre}>
            {provincia.nombre}
          </option>
        ))}
      </select>

      {provinciaSeleccionada && (
        <div>
          <label>Municipio:</label>
          <input
            className="municipio"
            type="text"
            placeholder="Escriba el nombre del municipio"
            onChange={handleMunicipioChange}
            value={municipioInput}
          />

          {showDropdown && municipiosFiltrados.length > 0 && (
            <div className="dropdown">
              {municipiosFiltrados.map((municipio) => (
                <div
                  key={municipio.id}
                  onClick={() => handleMunicipioSelect(municipio.nombre)}
                >
                  {municipio.nombre}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {municipioSeleccionado && (
        <div>
          <p className="municipio">
            Municipio seleccionado: {municipioSeleccionado.nombre.toLowerCase()}
          </p>
        </div>
      )}
      <Weather
        municipioSeleccionado={municipioSeleccionado}
        provinciaSeleccionada={provinciaSeleccionada}
        weatherdata={weatherdata}
      />
    </div>
  );
}

export default BusquedaClima;
