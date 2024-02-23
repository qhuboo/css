import React from "react";
import styled from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

import { QUERIES } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

console.log(QUERIES);

const Main = styled.main`
  padding: 64px 32px;

  // @media (${QUERIES.laptop}) {
  //   background-color: #01949a;
  // }

  // @media (${QUERIES.tablet}) {
  //   background-color: #db1f48;
  // }

  // @media (${QUERIES.phone}) {
  //   background-color: #145da0;
  // }
`;

export default App;
