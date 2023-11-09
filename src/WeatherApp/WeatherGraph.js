import React from "react";
import WeatherGraphTemp from "./WeatherGraph/WeatherGraphTemp";
import WeatherGraphRain from "./WeatherGraph/WeatherGraphRain";

function WeatherGraph({ hourly, hourlyunits, horaActual }) {
  return (
    <div className="graphs">
      <div className="graph">
        <WeatherGraphTemp
          hourly={hourly}
          hourlyunits={hourlyunits}
          horaActual={horaActual}
        />
      </div>
      <div className="graph">
        <WeatherGraphRain
          hourly={hourly}
          hourlyunits={hourlyunits}
          horaActual={horaActual}
        />
      </div>
    </div>
  );
}

export default WeatherGraph;
