import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

function WeatherGraphRain({ hourly, hourlyunits, horaActual }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight / 2);

  useEffect(() => {
    if (hourly.time.length === 0) return;

    const labels = hourly.time
      .map((hora) => hora.slice(-5))
      .slice(horaActual, horaActual + 24);
    const precipitacionesData = hourly.precipitation_probability.slice(
      horaActual,
      horaActual + 24
    );

    const ctx = chartRef.current.getContext("2d");

    // Destruye el gráfico anterior si existe
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label:
              "Precipitaciones (" + hourlyunits.precipitation_probability + ")",
            data: precipitacionesData,
            backgroundColor: "rgba(255, 99, 132, 0.8)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0,
            yAxisID: "precipitaciones-y-axis",
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          "precipitaciones-y-axis": {
            title: {
              display: true,
              text:
                "Precipitaciones (" +
                hourlyunits.precipitation_probability +
                ")", // Título del eje Y
            },
            type: "linear",
            position: "left",
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Probabilidad de Precipitaciones", // Título del gráfico
          },
          legend: {
            display: false, // Oculta el legend (label) del gráfico
          },
        },
      },
    });

    // Agrega un listener para detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Elimina el listener cuando el componente se desmonta
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [
    windowWidth,
    windowHeight,
    horaActual,
    hourly.precipitation_probability,
    hourly.time,
    hourlyunits.precipitation_probability,
  ]);

  const handleWindowResize = () => {
    // Actualiza el estado del ancho de la ventana al cambiar el tamaño
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  return (
    <div>
      <canvas ref={chartRef} width={windowWidth} height={windowHeight} />
    </div>
  );
}

export default WeatherGraphRain;
