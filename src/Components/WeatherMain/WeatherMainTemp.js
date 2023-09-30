import React from "react";
import styled, { css } from "styled-components";
import clockback from "../../img/tempclock-01.svg";
import clockarrow from "../../img/tempclock-02.svg";
import { H2T } from "../../styledcomponents/WeatherStyle";

const Temp = styled.div`
  display: grid;
  font-size: 26px;
  background-color: lightgreen;
  flex: 1 0 150px;
`;

const Tempclock = styled.div`
  background-image: url(${clockback});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 5%;

  & img {
    width: 100%;
    ${(props) => css`
      transform: rotate(${props.$rotationangle}deg);
    `}
  }
`;

function WeatherMainTemp({ temp }) {
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
      <H2T>{temp}°C</H2T>
    </Temp>
  );
}

export default WeatherMainTemp;
