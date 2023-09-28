import React, { useState, useEffect } from "react";
import styled from "styled-components";

const State = styled.div`
  display: grid;
  background-color: orange;
  flex: 1 0 300px;
`;

const StateIcon = styled(State)`
  color: yellow;
  font-size: 100px;
  padding: 3%;
`;

const StateDescription = styled(State)`
  background-color: yellow;
  color: blue;
  font-size: 40px;
`;

function WeatherMainState({ clima }) {
  // Estados para la fecha y hora actual
  const [fechaActual, setFechaActual] = useState(new Date());

  // Actualizar la fecha y hora actual cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setFechaActual(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Función para obtener el ícono según el estado del clima
  const obtenerIcono = (estado) => {
    // Lógica para asignar el ícono según el estado (puedes personalizar esto)
    switch (estado) {
      case "nublado":
        return "wi wi-cloudy";
      case "soleado":
        return "wi wi-day-sunny";
      case "tormenta":
        return "wi wi-storm-showers";
      default:
        return "wi-moon-new";
    }
  };

  return (
    <State>
      <StateIcon>
        <i className={obtenerIcono(clima.estado)} alt="Icono del clima"></i>
      </StateIcon>
      <StateDescription>{clima.estado}</StateDescription>
      <div>
        {fechaActual.toLocaleString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
        })}
      </div>
    </State>
  );
}

export default WeatherMainState;
