import React from "react";
import {
  H1,
  H1pro,
  WeatherMain,
  WeatherMainState,
  WeatherMainStateIcon,
  WeatherMainStateDescription,
} from "../styledcomponents/WeatherStyle";

function WeatherMainComponent() {
  return (
    <WeatherMain>
      <WeatherMainState>
        <WeatherMainStateIcon>ICONO</WeatherMainStateIcon>
        <WeatherMainStateDescription>
          Parcialmente nublado
        </WeatherMainStateDescription>
        <p className="weather-main-timeplace">Lunes, 3 de marzo de 2023</p>
        <p className="weather-main-timeplace">17:00</p>
      </WeatherMainState>
      <div className="weather-main-temp"></div>
      <H1>RELOJ CON TEMPERATURA </H1>
      <H1pro>Otro</H1pro>
      <div className="weather-main-maxmin">
        <p>Max temp</p>
        <p>Min temp</p>
      </div>
    </WeatherMain>
  );
}

export default WeatherMainComponent;
