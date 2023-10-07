import "./App.css";
import Weather from "./Components/Weather";
// import Practico1 from "./practico1/practico1";

function App() {
  return (
    <div className="App">
      <div className="weather">
        <Weather></Weather>
      </div>
      <div className="transport"> Acá va la app de transporte</div>
      {/* <Practico1></Practico1> */}
    </div>
  );
}

export default App;
