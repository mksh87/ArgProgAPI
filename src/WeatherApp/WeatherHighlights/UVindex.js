import React from "react";
import { H2, P1 } from "../styledcomponents/WeatherStyle";

function UVindex({ uv_index, uv_indexunits }) {
  return (
    <div className="highlights_module">
      <P1>
        <i className="wi wi-hot"></i>Índice UV:
      </P1>
      <H2>
        {uv_index} {uv_indexunits}
      </H2>
    </div>
  );
}

export default UVindex;
