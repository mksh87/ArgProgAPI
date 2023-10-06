import React from "react";
import styled from "styled-components";
import { H2, P1 } from "../../styledcomponents/WeatherStyle";

const WindStyle = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
`;

function Wind({ windspeed, windspeedunits }) {
  return (
    <WindStyle>
      <P1>
        <i className="wi wi-strong-wind"></i> Viento:{" "}
      </P1>
      <H2>
        {windspeed} {windspeedunits}
      </H2>
      <P1>ayayayay</P1>
    </WindStyle>
  );
}

export default Wind;
