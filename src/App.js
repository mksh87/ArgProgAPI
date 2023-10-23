import React, { useEffect, useState } from "react";
import BusquedaClima from "./Components/BusquedaClima";
import SeleccionTransporte from "./Transporte/SeleccionTransporte";

/* import Practico1 from "./practico1/practico1"; */

//https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6

function App() {
  // eslint-disable-next-line
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
          <BusquedaClima />
        </div>
        <div className="transport">
          {loading2 && <div>Cargando...</div>}
          {!loading2 && <SeleccionTransporte></SeleccionTransporte>}
        </div>
        {/* <Practico1></Practico1> */}
      </div>
    </>
  );
}

export default App;
