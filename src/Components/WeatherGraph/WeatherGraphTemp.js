import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

function WeatherGraphTemp({ clima }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const chartHeight = "200vh";

  useEffect(() => {
    if (clima.length === 0) return;

    const labels = clima.map((hora) => hora.horario);
    const temperaturaData = clima.map((hora) => hora.temperatura);

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
            label: "Temperatura",
            data: temperaturaData,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            yAxisID: "temperatura-y-axis",
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
  }, [clima, windowWidth]);

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
