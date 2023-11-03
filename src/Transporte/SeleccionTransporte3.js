import React, { useState, useEffect } from "react";
import routes from "./routeID.json";

function SeleccionTransporte3() {
  const [selectedLine, setSelectedLine] = useState(""); // Estado para almacenar la línea seleccionada
  const [transportURL, setTransportURL] = useState(""); // Estado para almacenar la URL de la API
  const [datosLineaSeleccionada, setDatosLineaSeleccionada] = useState([]); // Estado para almacenar los datos de la línea
  const [loading2, setLoading2] = useState(true); //cambiar a True

  const handleLineSelect = (event) => {
    const selectedRoute = event.target.value;
    const selectedRouteData = routes.find(
      (route) => route.route_short_name === selectedRoute
    );
    setSelectedLine(selectedRouteData);
  };

  useEffect(() => {
    if (selectedLine) {
      // Construye la URL con el routeID
      const apiURL = `https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${selectedLine.route_id}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
      setTransportURL(apiURL);

      // Realiza la primera solicitud a la API
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
          setDatosLineaSeleccionada(data);
          setLoading2(false);
        })
        .catch((error) =>
          console.error("Error al obtener datos de la línea:", error)
        );
    }
  }, [selectedLine]);

  useEffect(() => {
    // Configura la actualización automática cada 31 segundos
    const interval = setInterval(() => {
      if (selectedLine) {
        fetch(transportURL)
          .then((response) => response.json())
          .then((data) => setDatosLineaSeleccionada(data))
          .catch((error) =>
            console.error("Error al obtener datos de la línea:", error)
          );
      }
    }, 31000); // 31 segundos en milisegundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [selectedLine, transportURL]);

  return (
    <div>
      <select onChange={handleLineSelect}>
        <option value="">Selecciona una línea</option>
        {routes.map((route) => (
          <option key={route.route_id} value={route.route_short_name}>
            {route.route_short_name}
          </option>
        ))}
      </select>
      {loading2 && !selectedLine && <div>Elija una linea del desplegable</div>}
      {loading2 && selectedLine && <div>Cargando...</div>}
      {!loading2 && selectedLine && (
        <div>
          <p>Descripción de la línea: {selectedLine.route_desc}</p>
          <p>URL de transporte: {transportURL}</p>
          <p>
            Datos de la línea seleccionada:{" "}
            {JSON.stringify(datosLineaSeleccionada)}
          </p>
        </div>
      )}
    </div>
  );
}

export default SeleccionTransporte3;
