import React from "react";
import { H2, P1 } from "../styledcomponents/WeatherStyle";

function Humidity({ humidity, humidityunits }) {
  return (
    <div className="highlights_module">
      <P1>
        <i className="wi wi-humidity"></i> Humedad:{" "}
      </P1>
      <H2>
        {humidity}
        {humidityunits}
      </H2>
    </div>
  );
}

export default Humidity;
