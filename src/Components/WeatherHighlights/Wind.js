import React from "react";
import styled from "styled-components";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

const WindStyle = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
`;

function Wind({ clima }) {
  return (
    <WindStyle>
      <P1>Viento: </P1>
      <H2>{clima.windspeed} km/h</H2>
      <P1>ayayayay</P1>
    </WindStyle>
  );
}

export default Wind;
