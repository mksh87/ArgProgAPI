import React from "react";
import weatherDataIcons from "../../data/weatherstateicons.json";

function WeatherMainState({ weathercode, fechaActual }) {
  return (
    <div className="state">
      <div className="icon">
        <i
          className={weatherDataIcons[weathercode].icon}
          alt={weatherDataIcons[weathercode].name}
        ></i>
      </div>
      <div className="description">{weatherDataIcons[weathercode].name}</div>
      <div className="time">
        {fechaActual.toLocaleString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
        })}
      </div>
    </div>
  );
}

export default WeatherMainState;
