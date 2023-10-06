import React from "react";
import styled from "styled-components";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

const UVStyle = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
`;

function UVindex({ uv_index, uv_indexunits }) {
  return (
    <UVStyle>
      <P1>
        <i className="wi wi-hot"></i>Índice UV:
      </P1>
      <H2>
        {uv_index} {uv_indexunits}
      </H2>
      <P1>Me quemo</P1>
    </UVStyle>
  );
}

export default UVindex;
