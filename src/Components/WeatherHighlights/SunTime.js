import React from "react";
import { P1 } from "../../styledcomponents/WeatherStyle";

function SunTime({ sunrise, sunset }) {
  return (
    <div className="highlights_module">
      <P1>
        <i className="wi wi-sunrise"></i> {sunrise.slice(-5)}
      </P1>
      <P1>
        <i className="wi wi-sunset"></i> {sunset.slice(-5)}
      </P1>
    </div>
  );
}

export default SunTime;
