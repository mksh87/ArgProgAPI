import React, { useState } from "react";
// eslint-disable-next-line
import { linea } from "./ListadoLineas";
import TransitoDashboard from "./Transporte";
import routeID from "./routeID.json";
import "./Transporte.css";

function SeleccionTransporte() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lineaSeleccionada, setLineaSeleccionada] = useState({});
  const [datosLineaSeleccionada, setDatosLineaSeleccionada] = useState([]);
  const [filteredLinea, setFilteredLinea] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // Control the visibility of the dropdown
  const [noResults, setNoResults] = useState(false); // Control the "La linea no existe" message

  // Function to filter the results based on the search term
  const filterResults = (term) => {
    const filtered = routeID.filter((item) =>
      item.route_short_name.toLowerCase().includes(term.toLowerCase())
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

    const datos = routeID?.filter(
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
  /*   const [transportdata, setTransportdata] = useState(null);

 useEffect(() => {
   const interval = setInterval(() => {
     setLoading2(true);
     fetch(
       "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6"
     )
       .then((resp) => resp.json())
       .then((data) => {
         setTransportdata(data);
         setLoading2(false);
       })
       .catch((ex) => {
         console.error(ex);
       });
   }, 1000);
   return () => clearInterval(interval);
 }, []);

 if (!loading2) {
   const L253 = transportdata?.filter((obj) =>
     /253/.test(obj.route_short_name)
   );
   const L153 = transportdata?.filter((obj) =>
     /153/.test(obj.route_short_name)
   );
   const L321 = transportdata?.filter((obj) =>
     /321/.test(obj.route_short_name)
   );
   console.log(L253);
   console.log(L153);
   console.log(L321);
} */
  //hacer un for en base a un arreglo de números y después juntar todo en un solo arreglo para pasarlo al hijo
  //también hacer un segundo interval para la carga inicial

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
              {/* <p>Nombre: {datosLineaSeleccionada.route_long_name}</p> */}
            </div>
          </div>
          <TransitoDashboard datosLineaSeleccionada={datosLineaSeleccionada} />
        </>
      )}
    </>
  );
}

export default SeleccionTransporte;
