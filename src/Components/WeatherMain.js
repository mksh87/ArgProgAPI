import React from "react";
import "../weathericons/css/weather-icons.css";
import WeatherMainState from "./WeatherMain/WeatherMainState";
import WeatherMainTemp from "./WeatherMain/WeatherMainTemp";
import WeatherMainMaxmin from "./WeatherMain/WeatherMainMaxmin";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;

  & > div {
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
  }
`;

function WeatherMain({ clima, current, daily, dailyunits }) {
  return (
    <Main>
      <WeatherMainTemp temp={current.temperature} />
      <WeatherMainMaxmin
        max={daily.temperature_2m_max}
        min={daily.temperature_2m_min}
      />
      <WeatherMainState weathercode={current.weathercode} />
    </Main>
  );
}

export default WeatherMain;
