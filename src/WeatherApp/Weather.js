import React, { useEffect, useState } from "react";
import WeatherMain from "./WeatherMain";
import WeatherGraph from "./WeatherGraph";
import WeatherHighlights from "./WeatherHighlights";
import "./Weather.css";

function Weather({
  weatherdata,
  municipioSeleccionado,
  provinciaSeleccionada,
}) {
  // Estados para la fecha y hora actual
  const [fechaActual, setFechaActual] = useState(new Date());
  const [horaActual, setHoraActual] = useState(new Date().getHours());

  // Actualizar la fecha y hora actual cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setFechaActual(new Date());
      setHoraActual(new Date().getHours());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function redondearHoraAbajo(hora) {
    return Math.floor(hora);
  }

  if (!weatherdata) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-container">
      <div className="weather-component">
        <WeatherMain
          municipioSeleccionado={municipioSeleccionado}
          provinciaSeleccionada={provinciaSeleccionada}
          current={weatherdata.current_weather}
          currentunits={weatherdata.current_weather_units}
          daily={weatherdata.daily}
          dailyunits={weatherdata.daily_units}
          fechaActual={fechaActual}
          is_day={weatherdata.current_weather.is_day}
        />
      </div>
      <div className="graph-component">
        <WeatherGraph
          hourly={weatherdata.hourly}
          hourlyunits={weatherdata.hourly_units}
          horaActual={redondearHoraAbajo(horaActual)}
        />
      </div>
      <div className="weather-component">
        <WeatherHighlights
          current={weatherdata.current_weather}
          currentunits={weatherdata.current_weather_units}
          daily={weatherdata.daily}
          dailyunits={weatherdata.daily_units}
          hourly={weatherdata.hourly}
          hourlyunits={weatherdata.hourly_units}
          horaActual={redondearHoraAbajo(horaActual)}
        />
      </div>
    </div>
  );
}

export default Weather;
