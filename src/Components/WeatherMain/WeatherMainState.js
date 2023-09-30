import React, { useState, useEffect } from "react";
import styled from "styled-components";
import weatherDataIcons from "../../weatherstateicons.json";

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

function WeatherMainState({ weathercode }) {
  // Estados para la fecha y hora actual
  const [fechaActual, setFechaActual] = useState(new Date());

  // Actualizar la fecha y hora actual cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setFechaActual(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <State>
      <StateIcon>
        <i
          className={weatherDataIcons[weathercode].icon}
          alt={weatherDataIcons[weathercode].name}
        ></i>
      </StateIcon>
      <StateDescription>{weatherDataIcons[weathercode].name}</StateDescription>
      <div>
        {fechaActual.toLocaleString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
        })}
      </div>
    </State>
  );
}

export default WeatherMainState;