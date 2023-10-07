import React from "react";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

function Wind({ windspeed, windspeedunits }) {
  return (
    <div className="highlights_module">
      <P1>
        <i className="wi wi-strong-wind"></i> Viento:{" "}
      </P1>
      <H2>
        {windspeed} {windspeedunits}
      </H2>
    </div>
  );
}

export default Wind;
