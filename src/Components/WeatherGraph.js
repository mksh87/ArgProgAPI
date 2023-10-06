import React from "react";
import WeatherGraphTemp from "./WeatherGraph/WeatherGraphTemp";
import WeatherGraphRain from "./WeatherGraph/WeatherGraphRain";

function WeatherGraph({ hourly, hourlyunits, horaActual }) {
  return (
    <div>
      <WeatherGraphTemp
        hourly={hourly}
        hourlyunits={hourlyunits}
        horaActual={horaActual}
      />
      <WeatherGraphRain
        hourly={hourly}
        hourlyunits={hourlyunits}
        horaActual={horaActual}
      />
    </div>
  );
}

export default WeatherGraph;
