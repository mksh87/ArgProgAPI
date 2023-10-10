import React, { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Components/Weather";
// import Practico1 from "./practico1/practico1";

function App() {
  const [weatherdata, setWeatherdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,visibility,windspeed_10m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=3"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setWeatherdata(data);
        setLoading(false);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);

  return (
    <>
      {loading && <div>Cargando...</div>}
      {!loading && weatherdata && (
        <div className="App">
          <div className="weather">
            <Weather weatherdata={weatherdata} />
          </div>
          <div className="transport"> Acá va la app de transporte</div>
          {/* <Practico1></Practico1> */}
        </div>
      )}
    </>
  );
}

export default App;
