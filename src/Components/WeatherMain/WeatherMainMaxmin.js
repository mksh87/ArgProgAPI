import React from "react";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

function WeatherMainMaxmin({ max, min, tempunits }) {
  return (
    <div className="maxmin">
      <P1>Máxima:</P1>
      <H2>
        {max} {tempunits}
      </H2>
      <P1>Mínima:</P1>
      <H2>
        {min} {tempunits}
      </H2>
    </div>
  );
}

export default WeatherMainMaxmin;
