import React from "react";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

function Rain({ rain, rainunits }) {
  return (
    <div className="highlights_module">
      <P1>
        <i className="wi wi-cloud-refresh"></i> Precipitaciones:
      </P1>
      <H2>
        {rain} {rainunits}
      </H2>
    </div>
  );
}

export default Rain;
