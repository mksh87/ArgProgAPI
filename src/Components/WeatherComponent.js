import React from "react";
import WeatherMainComponent from "./WeatherMainComponent";
import WeatherGraphComponent from "./WeatherGraphComponent";
import WeatherHighlightsComponent from "./WeatherHighlightsComponent";

function WeatherComponent() {
  return (
    <div>
      <WeatherMainComponent></WeatherMainComponent>
      <WeatherGraphComponent></WeatherGraphComponent>
      <WeatherHighlightsComponent></WeatherHighlightsComponent>
    </div>
  );
}

export default WeatherComponent;
