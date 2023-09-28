import React from "react";
import styled from "styled-components";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

const HumidityStyle = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
`;

function Humidity({ clima }) {
  return (
    <HumidityStyle>
      <P1>
        <i className="wi wi-humidity"></i> Humedad:{" "}
      </P1>
      <H2>{clima.humidity}%</H2>
      <P1>Mi Pelo es un desastre</P1>
    </HumidityStyle>
  );
}

export default Humidity;
