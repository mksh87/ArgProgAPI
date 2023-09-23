import styled from "styled-components";

export const WeatherMain = styled.div`
  background-color: green;
  display: flex;
`;

export const WeatherMainState = styled(WeatherMain)`
  display: grid;
  background-color: red;
`;

export const WeatherMainStateIcon = styled(WeatherMainState)`
  color: blue;
`;

export const WeatherMainStateDescription = styled(WeatherMainState)`
  background-color: yellow;
  color: blue;
`;

export const H1 = styled.div`
  background-color: ${(hongo) => (hongo.red && "red") || "#645cfc"};
  border: none;
  padding: 10px;
  color: white;
`;

export const H1pro = styled(H1)`
  display: block;
  color: red;
`;
