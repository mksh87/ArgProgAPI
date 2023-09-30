import React from "react";
import WeatherMain from "./WeatherMain";
import WeatherGraph from "./WeatherGraph";
import WeatherHighlights from "./WeatherHighlights";
import weatherdata from "../weatherdata.json";

function Weather() {
  console.log(weatherdata.latitude);

  const climaAhora = {
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

  const climaHoy = [
    { horario: "00:00", temperatura: 6, precipitaciones: 10 },
    { horario: "01:00", temperatura: 7, precipitaciones: 1 },
    { horario: "02:00", temperatura: 8, precipitaciones: 1 },
    { horario: "03:00", temperatura: 9, precipitaciones: 3 },
    { horario: "04:00", temperatura: 9, precipitaciones: 10 },
    { horario: "05:00", temperatura: 10, precipitaciones: 20 },
    { horario: "06:00", temperatura: 14, precipitaciones: 40 },
    { horario: "07:00", temperatura: 15, precipitaciones: 40 },
    { horario: "08:00", temperatura: 19, precipitaciones: 40 },
    { horario: "09:00", temperatura: 20, precipitaciones: 70 },
    { horario: "10:00", temperatura: 24, precipitaciones: 70 },
    { horario: "11:00", temperatura: 29, precipitaciones: 95 },
    { horario: "12:00", temperatura: 29, precipitaciones: 40 },
    { horario: "13:00", temperatura: 27, precipitaciones: 10 },
    { horario: "14:00", temperatura: 25, precipitaciones: 1 },
    { horario: "15:00", temperatura: 22, precipitaciones: 1 },
    { horario: "16:00", temperatura: 20, precipitaciones: 1 },
    { horario: "17:00", temperatura: 21, precipitaciones: 1 },
    { horario: "18:00", temperatura: 17, precipitaciones: 1 },
    { horario: "19:00", temperatura: 13, precipitaciones: 1 },
    { horario: "20:00", temperatura: 15, precipitaciones: 1 },
    { horario: "21:00", temperatura: 11, precipitaciones: 1 },
    { horario: "22:00", temperatura: 11, precipitaciones: 1 },
    { horario: "23:00", temperatura: 10, precipitaciones: 1 },
    // Agrega los demás datos aquí
  ];

  return (
    <div>
      <WeatherMain
        clima={climaAhora}
        current={weatherdata.current_weather}
        daily={weatherdata.daily}
        dailyunits={weatherdata.daily_units}
      />
      <WeatherGraph clima={climaHoy} />
      <WeatherHighlights clima={climaAhora} />
    </div>
  );
}

export default Weather;
