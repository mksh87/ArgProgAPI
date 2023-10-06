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

function WeatherMain({
  current,
  currentunits,
  daily,
  dailyunits,
  fechaActual,
}) {
  return (
    <Main>
      <WeatherMainTemp
        temp={current.temperature}
        tempunits={currentunits.temperature}
      />
      <WeatherMainMaxmin
        max={daily.temperature_2m_max[0]}
        min={daily.temperature_2m_min[0]}
        tempunits={currentunits.temperature}
      />
      <WeatherMainState
        weathercode={current.weathercode}
        fechaActual={fechaActual}
      />
    </Main>
  );
}

export default WeatherMain;
