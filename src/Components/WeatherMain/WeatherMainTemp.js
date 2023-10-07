import React from "react";
import styled, { css } from "styled-components";
import clockback from "../../img/tempclock-03.svg";
import clockarrow from "../../img/tempclock-02.svg";

const H2T = styled.div`
  padding: 0px;
  margin: -25%;
  font-size: 2vmax;
  height: 30%;
`;

const Temp = styled.div`
  background-color: lightgreen;
  flex: 1 0 150px;
  box-shadow: -1px 1px 5px black;
`;

const Tempclock = styled.div`
  background-image: url(${clockback});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 5%;
  height: 70%;

  & img {
    max-width: 100%;
    max-height: 100%;
    ${(props) => css`
      transform: rotate(${props.$rotationangle}deg);
    `}
  }
`;

function WeatherMainTemp({ temp, tempunits }) {
  let rotationangle;

  if (typeof temp === "number") {
    if (temp < -20) {
      rotationangle = -12;
    } else if (temp > 48) {
      rotationangle = 280;
    } else {
      rotationangle = temp * 5 + 42;
    }
  } else {
    rotationangle = 315; // Valor por defecto en caso de error
  }
  return (
    <Temp>
      <Tempclock $rotationangle={rotationangle}>
        <img src={clockarrow} alt="Clock Arrow"></img>
      </Tempclock>
      <H2T>
        {temp} {tempunits}
      </H2T>
    </Temp>
  );
}

export default WeatherMainTemp;
