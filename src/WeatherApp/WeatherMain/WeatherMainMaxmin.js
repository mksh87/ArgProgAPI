import React from "react";

function WeatherMainMaxmin({
  max,
  min,
  tempunits,
  municipioSeleccionado,
  provinciaSeleccionada,
}) {
  return (
    <div className="maxmin">
      <div className="municipio p1">
        {municipioSeleccionado ? municipioSeleccionado.nombre : "Córdoba"},{" "}
        {provinciaSeleccionada}
      </div>
      <div className="p1">
        Máxima: {max} {tempunits}
      </div>
      <div className="p1">
        Mínima: {min} {tempunits}
      </div>
    </div>
  );
}

export default WeatherMainMaxmin;
