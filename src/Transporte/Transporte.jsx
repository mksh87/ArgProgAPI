import React from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";

function TransitoDashboard({ datosLineaSeleccionada }) {
  const position = [
    datosLineaSeleccionada[0].latitude,
    datosLineaSeleccionada[0].longitude,
  ];
  return (
    <div className="mapdiv">
      <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {datosLineaSeleccionada.map((item, index) => {
          return (
            <Marker
              key={index}
              position={[item["latitude"], item["longitude"]]}
            >
              <Popup>Linea {[item["agency_name"]]}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default TransitoDashboard;
