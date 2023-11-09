import React from "react";

function HourlyTable({ hourlyData }) {
  const hours = hourlyData.map((item) => item.hour);
  const rain_probability = hourlyData.map((item) => item.rain);

  // Nueva función para determinar la letra A, B o C
  const getLetter = (rain) => {
    if (rain < 20) return "A";
    if (rain < 50) return "B";
    return "C";
  };

  const letterRow = rain_probability.map((rain, index) => (
    <td key={index}>{getLetter(rain)}</td>
  ));

  return (
    <table className="raintable">
      <thead>
        <tr>
          {hours.map((hour, index) => (
            <th key={index}>{hour}</th>
          ))}
        </tr>
        <tr>{letterRow}</tr>
      </thead>
      <tbody>
        <tr>
          {rain_probability.map((rain, index) => (
            <td key={index}>{rain}%</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default HourlyTable;
