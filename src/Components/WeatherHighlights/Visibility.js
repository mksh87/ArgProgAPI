import React from "react";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

function Visibility({ visibility, visibilityunits }) {
  return (
    <div className="highlights_module">
      <P1>
        <i className="wi wi-horizon-alt"></i>Visibilidad:
      </P1>
      <H2>
        {visibility} {visibilityunits}
      </H2>
    </div>
  );
}

export default Visibility;
