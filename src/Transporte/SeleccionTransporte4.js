import React, { useState, useEffect } from "react";
import routes from "./routeID.json";
import TransitoDashboard from "./Transporte";

const SeleccionTransporte3 = () => {
  const [lineaSeleccionada, setLineaSeleccionada] = useState("");
  const [routeIDselected, setRouteIDselected] = useState("");
  const [transportURL, setTransportURL] = useState("");
  const [datosLineaSeleccionada, setDatosLineaSeleccionada] = useState("");
  const [loading2, setLoading2] = useState(true); //cambiar a True

  // Utiliza un Set para mantener valores únicos de route_linea
  const uniqueRouteLineas = [
    ...new Set(routes.map((route) => route.route_linea)),
  ];

  const handleLineaChange = (event) => {
    setLineaSeleccionada(event.target.value);
    setRouteIDselected(""); // Reiniciar routeIDselected cuando se cambia la línea
    setDatosLineaSeleccionada([]);
  };

  const handleRadioChange = (routeID) => {
    setRouteIDselected(routeID);
    setDatosLineaSeleccionada("");
    setLoading2(true);

    if (lineaSeleccionada) {
      const selectedRouteID = routeID;
      const apiUrl = `https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${selectedRouteID}&client_id=64f81c7eccfa419cb177a1041b0306ba&client_secret=780eEca7f72A403195bD91b56b6Aec9f`;
      setTransportURL(apiUrl);
    }
  };

  useEffect(() => {
    if (transportURL) {
      const fetchData = async () => {
        try {
          const response = await fetch(transportURL);
          const data = await response.json();
          setDatosLineaSeleccionada(data);
          setLoading2(false);
          console.log(data);
        } catch (error) {
          console.error("Error fetching API data: ", error);
          setLoading2(true);
        }
      };

      const interval = setInterval(fetchData, 10000);
      return () => clearInterval(interval);
    }
  }, [transportURL]);

  return (
    <div>
      <label htmlFor="lineaSeleccionada">Selecciona una línea:</label>
      <select id="lineaSeleccionada" onChange={handleLineaChange}>
        <option value="">Selecciona una línea</option>
        {uniqueRouteLineas.map((routeLinea) => (
          <option key={routeLinea} value={routeLinea}>
            {routeLinea}
          </option>
        ))}
      </select>

      {lineaSeleccionada && (
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>Linea</th>
              <th>Recorrido</th>
              <th>Sentido</th>
            </tr>
          </thead>
          <tbody>
            {routes
              .filter((route) => route.route_linea === lineaSeleccionada)
              .map((route) => (
                <tr key={route.route_id}>
                  <td>
                    <input
                      type="radio"
                      name="selectedRoute"
                      value={route.route_id}
                      onChange={() => handleRadioChange(route.route_id)}
                    />
                  </td>
                  <td>{route.route_short_name}</td>
                  <td>{route.route_desc}</td>
                  <td>{route.route_dir}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {loading2 && !lineaSeleccionada && (
        <div>Elija una linea del desplegable</div>
      )}
      {loading2 &&
        lineaSeleccionada &&
        !transportURL &&
        datosLineaSeleccionada.length === 0 && <div>Elija una linea</div>}
      {loading2 && routeIDselected && <div>Cargando...</div>}
      {!loading2 && routeIDselected && datosLineaSeleccionada.length === 0 && (
        <div>No hay colectivos circulando en esta linea</div>
      )}
      {!loading2 && datosLineaSeleccionada.length !== 0 && (
        <TransitoDashboard datosLineaSeleccionada={datosLineaSeleccionada} />
      )}
    </div>
  );
};

export default SeleccionTransporte3;
