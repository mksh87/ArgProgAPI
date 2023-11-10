import React from "react";

function UVindex({ uv_index, uv_indexunits }) {
  return (
    <div className="highlights_module">
      <div className="p1">
        <i className="wi wi-hot"></i>Índice UV:
      </div>
      <h2>
        {uv_index} {uv_indexunits}
      </h2>
    </div>
  );
}

export default UVindex;
