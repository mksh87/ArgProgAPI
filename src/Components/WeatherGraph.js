import React from "react";
import WeatherGraphTemp from "./WeatherGraph/WeatherGraphTemp";
import WeatherGraphRain from "./WeatherGraph/WeatherGraphRain";

function WeatherGraph({ clima }) {
  return (
    <div>
      <WeatherGraphTemp clima={clima} />
      <WeatherGraphRain clima={clima} />
    </div>
  );
}

export default WeatherGraph;
