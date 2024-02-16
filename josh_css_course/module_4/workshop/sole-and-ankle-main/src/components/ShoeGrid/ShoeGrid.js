import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  gap: 32px;

  & > * {
    flex: 1 1 350px;
    padding-bottom: 30px;
  }
`;

export default ShoeGrid;
