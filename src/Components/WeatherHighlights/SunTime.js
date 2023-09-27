import React from "react";
import styled from "styled-components";

const SunStyle = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
`;

function SunTime({ clima }) {
  return (
    <SunStyle>
      <p>Amanece: {clima.sunrise} </p>
      <p>Anochece: {clima.sunset}</p>
    </SunStyle>
  );
}

export default SunTime;
