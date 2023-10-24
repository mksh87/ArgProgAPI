import React, { useState, useEffect } from "react";
import provinciasData from "../provincias.json";
import localidadesData from "../localidades.json";
import Weather from "./Weather";

function WeatherSearch() {
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState("Córdoba");
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState(null); // Inicialmente nulo
  const [municipiosFiltrados, setMunicipiosFiltrados] = useState([]);
  const [municipioInput, setMunicipioInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (provinciaSeleccionada) {
      const filteredMunicipios = localidadesData.localidades.filter(
        (municipio) =>
          municipio.provincia.nombre ===
          provinciaSeleccionada.toLocaleLowerCase()
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
        municipio.provincia.nombre ===
          provinciaSeleccionada.toLocaleLowerCase() &&
        municipio.nombre.toLowerCase().includes(inputText.toLowerCase())
    );

    setMunicipiosFiltrados(filteredMunicipios.slice(0, 10));
    setShowDropdown(true);
  };

  const handleMunicipioSelect = (selectedMunicipio) => {
    // Encuentra el objeto completo del municipio seleccionado
    const municipioCompleto = localidadesData.localidades.find(
      (municipio) =>
        municipio.provincia.nombre ===
          provinciaSeleccionada.toLocaleLowerCase() &&
        municipio.nombre === selectedMunicipio
    );
    setMunicipioSeleccionado(municipioCompleto);
    setMunicipioInput(selectedMunicipio.toLowerCase());
    setMunicipiosFiltrados([]);
    setShowDropdown(false);
    console.log(municipioCompleto.centroide.lat);
    console.log(municipioCompleto.centroide.lon);

    setWeatherURL(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        municipioCompleto.centroide.lat +
        "&longitude=" +
        municipioCompleto.centroide.lon +
        "&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,visibility,windspeed_10m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=3"
    );

    setLoading(true);
    fetch(weatherURL)
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherdata(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
      });
  };

  const [weatherdata, setWeatherdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherURL, setWeatherURL] = useState(
    "https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,visibility,windspeed_10m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=3"
  );

  useEffect(() => {
    setLoading(true);
    fetch(weatherURL)
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherdata(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);

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

      {/*       {municipioSeleccionado && (
        <div>
          <p className="municipio">
            Municipio seleccionado: {municipioSeleccionado.nombre.toLowerCase()}
          </p>
        </div>
      )} */}
      {loading && <div>Cargando...</div>}
      {!loading && weatherdata && (
        <Weather
          municipioSeleccionado={municipioSeleccionado}
          provinciaSeleccionada={provinciaSeleccionada}
          weatherdata={weatherdata}
        />
      )}
    </div>
  );
}

export default WeatherSearch;
