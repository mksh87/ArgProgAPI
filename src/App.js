import React, { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Components/Weather";
import SeleccionTransporte from "./Transporte/SeleccionTransporte";
import transportdata2 from "./transportdata_long.json";

/* import Practico1 from "./practico1/practico1"; */

//https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6

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

  const [loading2, setLoading2] = useState(false); //cambiar a True
  /*   const [transportdata, setTransportdata] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading2(true);
      fetch(
        "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6"
      )
        .then((resp) => resp.json())
        .then((data) => {
          setTransportdata(data);
          setLoading2(false);
        })
        .catch((ex) => {
          console.error(ex);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!loading2) {
    const L253 = transportdata?.filter((obj) =>
      /253/.test(obj.route_short_name)
    );
    const L153 = transportdata?.filter((obj) =>
      /153/.test(obj.route_short_name)
    );
    const L321 = transportdata?.filter((obj) =>
      /321/.test(obj.route_short_name)
    );
    console.log(L253);
    console.log(L153);
    console.log(L321);
} */
  //hacer un for en base a un arreglo de números y después juntar todo en un solo arreglo para pasarlo al hijo
  //también hacer un segundo interval para la carga inicial

  return (
    <>
      <div className="App">
        <div className="weather">
          {loading && <div>Cargando...</div>}
          {!loading && weatherdata && (
            <Weather weatherdata={weatherdata} />
          )}{" "}
        </div>
        <div className="transport">
          {loading2 && <div>Cargando...</div>}
          {!loading2 && transportdata2 && (
            <SeleccionTransporte
              transportdata2={transportdata2}
            ></SeleccionTransporte>
          )}
        </div>
        {/* <Practico1></Practico1> */}
      </div>
    </>
  );
}

export default App;
