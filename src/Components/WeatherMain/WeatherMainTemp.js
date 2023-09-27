import React from "react";
import styled, { css } from "styled-components";
import clockback from "../../img/tempclock-01.svg";
import clockarrow from "../../img/tempclock-02.svg";

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

function WeatherMainTemp({ clima }) {
  let rotationangle;

  if (typeof clima.temperatura === "number") {
    if (clima.temperatura < -20) {
      rotationangle = -12;
    } else if (clima.temperatura > 48) {
      rotationangle = 280;
    } else {
      rotationangle = clima.temperatura * 5 + 42;
    }
  } else {
    rotationangle = 315; // Valor por defecto en caso de error
  }
  return (
    <Temp>
      <Tempclock $rotationangle={rotationangle}>
        <img src={clockarrow} alt="Clock Arrow"></img>
      </Tempclock>
      <p>{clima.temperatura}°C</p>
    </Temp>
  );
}

export default WeatherMainTemp;
