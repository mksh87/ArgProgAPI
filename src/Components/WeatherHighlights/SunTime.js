import React from "react";
import styled from "styled-components";

const SunStyle = styled.div`
  display: grid;
  background-color: lightblue;
  flex: 1 0 200px;
  grid-template-rows: repeat(4, 25%);

  & div {
    align-self: stretch;
    f
  }
`;

function SunTime({ sunrise, sunset }) {
  return (
    <SunStyle>
      <div>
        <i className="wi wi-sunrise"></i> Amanece
      </div>
      <div>{sunrise.slice(-5)}</div>
      <div>
        <i className="wi wi-sunset"></i> Anochece
      </div>
      <div>{sunset.slice(-5)}</div>
    </SunStyle>
  );
}

export default SunTime;
