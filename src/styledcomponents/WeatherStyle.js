import styled from "styled-components";

export const HM1 = styled.div`
  background-color: ${(hongo) => (hongo.red && "red") || "#645cfc"};
  border: none;
  padding: 10px;
  color: white;
`;

export const H2 = styled.div`
  padding: 2px;
  margin: 0px;
  font-size: 1.5vmax;
`;

export const P1 = styled.p`
  padding: 2px;
  margin: 0px;
  font-size: 1.5vmax;
`;

export const H1pro = styled(HM1)`
  display: block;
  color: red;
`;
