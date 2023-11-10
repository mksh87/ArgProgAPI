import React from "react";

function Visibility({ visibility, visibilityunits }) {
  return (
    <div className="highlights_module">
      <div className="p1">
        <i className="wi wi-horizon-alt"></i>Visibilidad:
      </div>
      <h2>
        {visibility} {visibilityunits}
      </h2>
    </div>
  );
}

export default Visibility;
