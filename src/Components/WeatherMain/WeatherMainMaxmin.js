import React from "react";
import styled from "styled-components";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

const Maxmin = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
`;

function WeatherMainMaxmin({ clima }) {
  return (
    <Maxmin>
      <P1>Temperatura máxima:</P1>
      <H2>{clima.tempMax}°C</H2>
      <P1>Temperatura mínima:</P1>
      <H2>{clima.tempMin}°C</H2>
    </Maxmin>
  );
}

export default WeatherMainMaxmin;
