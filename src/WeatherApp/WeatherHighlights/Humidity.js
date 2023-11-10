import React from "react";

function Humidity({ humidity, humidityunits }) {
  return (
    <div className="highlights_module">
      <div className="p1">
        <i className="wi wi-humidity"></i> Humedad:{" "}
      </div>
      <h2>
        {humidity}
        {humidityunits}
      </h2>
    </div>
  );
}

export default Humidity;
