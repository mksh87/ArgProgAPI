import React, { useEffect, useState } from "react";
import WeatherMain from "./WeatherMain";
import WeatherGraph from "./WeatherGraph";
import WeatherHighlights from "./WeatherHighlights";
import weatherdata from "../weatherdata.json";

//https://api.open-meteo.com/v1/forecast?latitude=-31.375&longitude=-64.125&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,visibility,windspeed_10m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=3

function Weather() {
  // const [weatherData2, setWeatherData2] = useState();

  // const fetchWeatherApi = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,visibility,windspeed_10m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=3"
  //     );
  //     const data = await response.json();
  //     setWeatherData2(data);
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchWeatherApi();
  // }, []);

  // console.log(weatherData2);

  // console.log(weatherData2.current_weather.temperature);

  // Estados para la fecha y hora actual
  const [fechaActual, setFechaActual] = useState(new Date());
  const [horaActual, setHoraActual] = useState(new Date().getHours());

  // Actualizar la fecha y hora actual cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setFechaActual(new Date());
      setHoraActual(new Date().getHours());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function redondearHoraAbajo(hora) {
    return Math.floor(hora);
  }

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

  return (
    <div>
      <WeatherMain
        current={weatherdata.current_weather}
        currentunits={weatherdata.current_weather_units}
        daily={weatherdata.daily}
        dailyunits={weatherdata.daily_units}
        fechaActual={fechaActual}
      />
      <WeatherGraph
        hourly={weatherdata.hourly}
        hourlyunits={weatherdata.hourly_units}
        horaActual={redondearHoraAbajo(horaActual)}
      />
      <WeatherHighlights
        clima={climaAhora}
        current={weatherdata.current_weather}
        currentunits={weatherdata.current_weather_units}
        daily={weatherdata.daily}
        dailyunits={weatherdata.daily_units}
        hourly={weatherdata.hourly}
        hourlyunits={weatherdata.hourly_units}
        horaActual={redondearHoraAbajo(horaActual)}
      />
    </div>
  );
}

export default Weather;
