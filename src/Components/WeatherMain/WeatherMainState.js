import React, { useState, useEffect } from "react";
import weatherDataIcons from "../../weatherstateicons.json";

function WeatherMainState({ weathercode, fechaActual }) {
  // console.log(redondearHoraAbajo(horaActual));

  return (
    <div className="state">
      <div className="icon">
        <i
          className={weatherDataIcons[weathercode].icon}
          alt={weatherDataIcons[weathercode].name}
        ></i>
      </div>
      <div className="description">{weatherDataIcons[weathercode].name}</div>
      <div>
        {fechaActual.toLocaleString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
        })}
      </div>
    </div>
  );
}

export default WeatherMainState;
