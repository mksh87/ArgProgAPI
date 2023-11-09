import React from "react";
import "../weathericons/css/weather-icons.css";
import WeatherMainState from "./WeatherMain/WeatherMainState";
import WeatherMainTemp from "./WeatherMain/WeatherMainTemp";
import WeatherMainMaxmin from "./WeatherMain/WeatherMainMaxmin";

function WeatherMain({
  is_day,
  current,
  currentunits,
  daily,
  fechaActual,
  municipioSeleccionado,
  provinciaSeleccionada,
}) {
  return (
    <div className="main">
      <WeatherMainTemp
        temp={current.temperature}
        tempunits={currentunits.temperature}
      />
      <WeatherMainState
        weathercode={current.weathercode}
        fechaActual={fechaActual}
        is_day={is_day}
      />

      <WeatherMainMaxmin
        municipioSeleccionado={municipioSeleccionado}
        provinciaSeleccionada={provinciaSeleccionada}
        max={daily.temperature_2m_max[0]}
        min={daily.temperature_2m_min[0]}
        tempunits={currentunits.temperature}
      />
    </div>
  );
}

export default WeatherMain;
