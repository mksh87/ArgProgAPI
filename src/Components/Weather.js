import React from "react";
import WeatherMain from "./WeatherMain";
import WeatherGraph from "./WeatherGraph";
import WeatherHighlights from "./WeatherHighlights";

function Weather() {
  const clima = {
    temperatura: 40,
    estado: "soleado",
    tempMin: 23,
    tempMax: 35,
    uvindex: 6,
    windspeed: 11.12,
    sunrise: "6:35 am",
    sunset: "5:42 pm",
    humidity: 12,
    visibility: 6.1,
    airquality: 105,
  };
  return (
    <div>
      <WeatherMain clima={clima} />
      <WeatherGraph clima={clima} />
      <WeatherHighlights clima={clima} />
    </div>
  );
}

export default Weather;
