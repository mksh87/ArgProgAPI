import React from "react";

function SunTime({ sunrise, sunset }) {
  return (
    <div className="highlights_module">
      <div className="p1">
        <i className="wi wi-sunrise"></i> {sunrise.slice(-5)}
      </div>
      <div className="p1">
        <i className="wi wi-sunset"></i> {sunset.slice(-5)}
      </div>
    </div>
  );
}

export default SunTime;
