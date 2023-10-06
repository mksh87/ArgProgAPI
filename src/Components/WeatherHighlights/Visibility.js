import React from "react";
import styled from "styled-components";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

const VisibilityStyle = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
`;

function Visibility({ visibility, visibilityunits }) {
  return (
    <VisibilityStyle>
      <P1>
        <i className="wi wi-horizon-alt"></i>Visibilidad:
      </P1>
      <H2>
        {visibility} {visibilityunits}
      </H2>
      <P1>No se ve un carajo</P1>
    </VisibilityStyle>
  );
}

export default Visibility;
