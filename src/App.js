import React, { useEffect, useState } from "react";
import WeatherSearch from "./WeatherApp/WeatherSearch";
import SeleccionTransporte4 from "./Transporte/SeleccionTransporte4";
/* import Practico1 from "./practico1/practico1"; */

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
              <SeleccionTransporte4 />
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
                <SeleccionTransporte4 />
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
