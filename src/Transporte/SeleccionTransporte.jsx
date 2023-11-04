import React, { useState } from "react";
import { linea } from "./ListadoLineas";
import TransitoDashboard from "./Transporte";
import transportdata2 from "../transportdata_long.json";
import "./Transporte.css";

function SeleccionTransporte() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lineaSeleccionada, setLineaSeleccionada] = useState("");
  const [datosLineaSeleccionada, setDatosLineaSeleccionada] = useState([]);
  const [filteredLinea, setFilteredLinea] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // Control the visibility of the dropdown
  const [noResults, setNoResults] = useState(false); // Control the "La linea no existe" message

  // Function to filter the results based on the search term
  const filterResults = (term) => {
    const filtered = linea.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    if (filtered.length === 0) {
      setNoResults(true); // Show "La linea no existe" message
    } else {
      setNoResults(false);
    }
    setFilteredLinea(filtered.slice(0, 10)); // Show at most 10 results
  };

  // Handle the search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterResults(term);
    setShowDropdown(!!term); // Show the dropdown only when there's a search term
  };

  // Handle the selection of a value
  const handleSelectValue = (value) => {
    setLineaSeleccionada(value);

    const datos = transportdata2?.filter(
      (item) => item.route_short_name === value.toString()
    );
    setDatosLineaSeleccionada(datos);
    setSearchTerm(""); // Clear the search box
    setFilteredLinea([]); // Clear the dropdown
    setShowDropdown(false); // Hide the dropdown when an item is selected
  };

  // Hasta acá funcionalidades del dropdown. A partir de acá, fetch de la api

  // eslint-disable-next-line
  const [loading2, setLoading2] = useState(false); //cambiar a True

  return (
    <>
      {loading2 && <div>Cargando...</div>}
      {!loading2 && (
        <>
          <div className="search-container">
            <div className="search-box">
              <input
                id="searchbox"
                type="text"
                placeholder="Escribe la línea"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div
                className="dropdown"
                style={{
                  display: showDropdown ? "block" : "none",
                }}
              >
                {filteredLinea.map((value) => (
                  <div key={value} onClick={() => handleSelectValue(value)}>
                    {value}
                  </div>
                ))}
                {noResults && (
                  <div className="no-results">La linea no existe</div>
                )}
              </div>
            </div>
            <div>
              <p>Linea: {lineaSeleccionada}</p>
            </div>
          </div>
          <TransitoDashboard datosLineaSeleccionada={datosLineaSeleccionada} />
        </>
      )}
    </>
  );
}

export default SeleccionTransporte;
