import React from "react";

function Wind({ windspeed, windspeedunits }) {
  return (
    <div className="highlights_module">
      <div className="p1">
        <i className="wi wi-strong-wind"></i> Viento:{" "}
      </div>
      <h2>
        {windspeed} {windspeedunits}
      </h2>
    </div>
  );
}

export default Wind;
