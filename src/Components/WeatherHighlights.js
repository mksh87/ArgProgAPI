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

function WeatherHighlights({
  clima,
  current,
  currentunits,
  daily,
  dailyunits,
  hourly,
  hourlyunits,
  horaActual,
}) {
  return (
    <HLMain>
      <AirQuality clima={clima} />
      <Visibility
        visibility={hourly.visibility[horaActual]}
        visibilityunits={hourlyunits.visibility}
      />
      <Wind
        windspeed={current.windspeed}
        windspeedunits={currentunits.windspeed}
      />
      <UVindex
        uv_index={hourly.uv_index[horaActual]}
        uv_indexunits={hourlyunits.uv_index}
      />
      <SunTime sunrise={daily.sunrise[0]} sunset={daily.sunset[0]} />
      <Humidity
        humidity={hourly.relativehumidity_2m[horaActual]}
        humidityunits={hourlyunits.relativehumidity_2m}
      />
    </HLMain>
  );
}

export default WeatherHighlights;
