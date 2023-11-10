import React from "react";

function Rain({ rain, rainunits }) {
  return (
    <div className="highlights_module">
      <div className="p1">
        <i className="wi wi-cloud-refresh"></i> Precipitaciones:
      </div>
      <h2>
        {rain} {rainunits}
      </h2>
    </div>
  );
}

export default Rain;
