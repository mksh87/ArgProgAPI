import React from "react";
import styled from "styled-components";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

const UVStyle = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
`;

function UVindex({ clima }) {
  return (
    <UVStyle>
      <P1>Índice UV:</P1>
      <H2>{clima.uvindex}</H2>
      <P1>Me quemo</P1>
    </UVStyle>
  );
}

export default UVindex;
