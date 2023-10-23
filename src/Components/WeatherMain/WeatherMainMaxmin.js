import React from "react";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

function WeatherMainMaxmin({
  max,
  min,
  tempunits,
  municipioSeleccionado,
  provinciaSeleccionada,
}) {
  return (
    <div className="maxmin">
      <P1>
        {municipioSeleccionado?.nombre}, {provinciaSeleccionada}
      </P1>
      <P1>
        Máxima: {max} {tempunits}
      </P1>
      <P1>
        Mínima: {min} {tempunits}
      </P1>
    </div>
  );
}

export default WeatherMainMaxmin;
