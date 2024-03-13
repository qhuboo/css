import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper style={{ border: "3px dashed red" }}>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  border: 3px solid springgreen;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px 20px;

  @media (${QUERIES.tabletOnly}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  border: 3px solid chartreuse;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // gap: 1rem;

  @media (${QUERIES.tabletOnly}) {
    display: inline-block;
    white-space: nowrap;
    overflow: scroll;
    height: 200px;
  }
`;

export default SpecialtyStoryGrid;
