import React from "react";
import AirQuality from "./WeatherHighlights/AirQuality";
import Visibility from "./WeatherHighlights/Visibility";
import Wind from "./WeatherHighlights/Wind";
import UVindex from "./WeatherHighlights/UVindex";
import SunTime from "./WeatherHighlights/SunTime";
import Humidity from "./WeatherHighlights/Humidity";
import styled from "styled-components";
import "../weathericons/css/weather-icons.css";

const HLMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0;

  & > div {
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
  }
`;

function WeatherHighlights({ clima }) {
  return (
    <HLMain>
      <AirQuality clima={clima} />
      <Visibility clima={clima} />
      <Wind clima={clima} />
      <UVindex clima={clima} />
      <SunTime clima={clima} />
      <Humidity clima={clima} />
    </HLMain>
  );
}

export default WeatherHighlights;
