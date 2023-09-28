import styled from "styled-components";

export const HM1 = styled.div`
  background-color: ${(hongo) => (hongo.red && "red") || "#645cfc"};
  border: none;
  padding: 10px;
  color: white;
`;

export const H2 = styled.div`
  padding: 5px;
  margin: 0px;
  font-size: 35px;
`;

export const H2T = styled(H2)`
  padding: 0px;
  margin: -25%;
  font-size: 3vmax;
`;

export const P1 = styled.p`
  padding: 5px;
  margin: 0px;
  font-size: 15px;
`;

export const H1pro = styled(HM1)`
  display: block;
  color: red;
`;
