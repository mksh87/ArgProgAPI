import data from "./data.json";
import weatherDataIcons from "../weatherstateicons.json";
import { useEffect } from "react";

function Practico1() {
  const p_1 = () => {
    console.log("1a) Latitud: " + data.latitude);
    console.log("1b) Longitud: " + data.longitude);
  };

  const p_2 = () => {
    console.log("2) Logitud de hourly: " + data["hourly"]["time"].length);
  };

  const p_3 = () => {
    let pos = data.hourly.time.indexOf("2023-10-03T03:00");
    console.log(
      "3) Temperatura 3/10 3am: " +
        data.hourly.temperature_2m[pos] +
        data.hourly_units.temperature_2m
    );
  };

  const p_4 = () => {
    let pos = data.daily.time.indexOf("2023-10-06");
    console.log(
      "4) Viento 6/10: " +
        data.daily.windspeed_10m_max[pos] +
        data.daily_units.windspeed_10m_max
    );
  };

  const p_5 = () => {
    console.log("5) Longitud daily: " + data.daily.time.length);
  };

  const p_6 = () => {
    let pos = data.daily.time.indexOf("2023-10-05");
    console.log("6) Sunrise 5/10: " + data.daily.sunrise[pos].slice(-5));
  };

  const p_7 = () => {
    console.log(
      "7) Condicion meteorológica: " +
        data.current_weather.weathercode +
        " - " +
        weatherDataIcons[data.current_weather.weathercode].name
    );
  };

  const p_8 = () => {
    console.log("8) Elevación: " + data.elevation + " msnm");
  };

  const p_9 = () => {
    let pos = data.hourly.time.indexOf("2023-10-04T08:00");
    console.log(
      "9) Condicion meteorológica: " +
        data.hourly.weathercode[pos] +
        " - " +
        weatherDataIcons[data.hourly.weathercode[pos]].name
    );
  };

  const p_10 = () => {
    let pos = data.hourly.time.indexOf("2023-10-09T12:00");
    console.log(
      "10) Humedad suelo: " +
        data.hourly.soil_moisture_0_1cm[pos] +
        " " +
        data.hourly_units.soil_moisture_0_1cm
    );
  };

  const p_11 = () => {
    let pos = data.hourly.time.indexOf("2023-10-03T00:00");
    let temp3 = data.hourly.temperature_2m.slice(pos, pos + 23);
    console.log("11) " + temp3);
  };

  const p_12 = () => {
    let pos = data.hourly.time.indexOf("2023-10-06T00:00");
    let wind6 = data.hourly.windspeed_10m.slice(pos, pos + 23);
    let average =
      wind6.reduce((a, c) => {
        return a + c;
      }, 0) / wind6.length;
    console.log("12) Viento promedio:" + Math.round(average * 100) / 100);
  };

  const p_13 = () => {
    let dif = [];
    for (let i = 0; i < data.daily.time.length; i++) {
      dif.push(
        Number(data.daily.temperature_2m_max[i]) -
          Number(data.daily.temperature_2m_min[i])
      );
    }
    console.log("13) Max dif: " + Math.round(Math.max(...dif) * 100) / 100);
  };

  const p_14 = () => {
    let pos = data.hourly.time.indexOf("2023-10-07T00:00");
    let wind7 = data.hourly.windspeed_10m.slice(pos, pos + 23);
    let windMax = Math.max(...wind7);
    let posW = data.hourly.windspeed_10m.slice(pos, pos + 23).indexOf(windMax);
    let timeMax = data.hourly.time[pos + posW].slice(-5);
    console.log(
      "14) Viento máx de " +
        windMax +
        " " +
        data.daily_units.windspeed_10m_max +
        " a las " +
        timeMax
    );
  };

  const p_15 = () => {
    let srhours = [];
    let sshours = [];
    for (let i = 0; i < data.daily.time.length; i++) {
      srhours.push(
        Number(data.daily.sunrise[i].slice(-5, -3)) +
          Number(data.daily.sunrise[i].slice(-2)) / 60
      );
      sshours.push(
        Number(data.daily.sunset[i].slice(-5, -3)) +
          Number(data.daily.sunset[i].slice(-2)) / 60
      );
    }
    let srmin =
      Math.floor(Math.min(...srhours)) +
      ":" +
      Math.round(
        (Math.min(...srhours) - Math.floor(Math.min(...srhours))) * 60
      );

    let ssmax =
      Math.floor(Math.max(...sshours)) +
      ":" +
      Math.round(
        (Math.max(...sshours) - Math.floor(Math.max(...sshours))) * 60
      );

    console.log("15a) Amanecer más temprano: " + srmin);
    console.log("15b) Atarceder más tardío: " + ssmax);
  };

  useEffect(() => {
    p_1();
    p_2();
    p_3();
    p_4();
    p_5();
    p_6();
    p_7();
    p_8();
    p_9();
    p_10();
    p_11();
    p_12();
    p_13();
    p_14();
    p_15();
  }, []);

  return <></>;
}

export default Practico1;
