import React, { useEffect, useState } from "react";
import WeatherSearch from "./Components/WeatherSearch";
import SeleccionTransporte from "./Transporte/SeleccionTransporte";

/* import Practico1 from "./practico1/practico1"; */
//https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6

function App() {
  const [activeTab, setActiveTab] = useState("Clima");
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setIsHorizontal(window.innerWidth > window.innerHeight);
    }

    handleWindowResize(); // Check initial orientation
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="App">
        {isHorizontal ? (
          <></>
        ) : (
          <div className="menu">
            <button
              className={activeTab === "Clima" ? "active" : ""}
              onClick={() => handleTabClick("Clima")}
            >
              Clima
            </button>
            <button
              className={activeTab === "Transporte" ? "active" : ""}
              onClick={() => handleTabClick("Transporte")}
            >
              Colectivos
            </button>
          </div>
        )}

        {isHorizontal ? (
          <>
            <div className="weather">
              <WeatherSearch />
            </div>
            <div className="transport">
              <SeleccionTransporte />
            </div>
          </>
        ) : (
          <div className="content">
            {activeTab === "Clima" ? (
              <div className="weather">
                <WeatherSearch />
              </div>
            ) : (
              <div className="transport">
                <SeleccionTransporte />
              </div>
            )}
          </div>
        )}

        {/* <Practico1></Practico1> */}
      </div>
    </>
  );
}

export default App;
