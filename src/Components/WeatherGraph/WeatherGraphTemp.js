import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

function WeatherGraphTemp({ hourly, hourlyunits, horaActual }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const chartHeight = "200vh";

  useEffect(() => {
    if (hourly.time.length === 0) return;

    const labels = hourly.time
      .map((hora) => hora.slice(-5))
      .slice(horaActual, horaActual + 24);
    const temperaturaData = hourly.temperature_2m.slice(
      horaActual,
      horaActual + 24
    );

    const ctx = chartRef.current.getContext("2d");

    // Destruye el gráfico anterior si existe
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Temperatura (" + hourlyunits.temperature_2m + ")",
            data: temperaturaData,
            backgroundColor: "rgba(75, 192, 192, 0.8)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            tension: 0.3,
            yAxisID: "temperatura-y-axis",
            display: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          "temperatura-y-axis": {
            type: "linear",
            position: "left",
            title: {
              display: true,
              text: "Temperatura (" + hourlyunits.temperature_2m + ")", // Título del eje Y
            },
            ticks: {
              callback: (value) => `${value}°C`, // Agrega "°C" al valor
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Gráfico de Temperatura", // Título del gráfico
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
    hourly.temperature_2m,
    hourly.time,
    hourlyunits.temperature_2m,
  ]);

  const handleWindowResize = () => {
    // Actualiza el estado del ancho de la ventana al cambiar el tamaño
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <canvas ref={chartRef} width={windowWidth} height={chartHeight} />
    </div>
  );
}

export default WeatherGraphTemp;
