import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

function transitoDashboard({ datosLineaSeleccionada }) {
  // https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6

  const position = [-34.64657, -58.59802];

  return (
    <>
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
    </>
  );
}

export default transitoDashboard;
