import React from "react";
import styled from "styled-components";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

const Quality = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
`;

function AirQuality({ clima }) {
  return (
    <Quality>
      <P1>Air Quality:</P1>
      <H2>{clima.airquality}</H2>
      <P1>Jodido</P1>
    </Quality>
  );
}

export default AirQuality;
