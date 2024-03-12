import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

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
  display: flex;
  justify-content: space-between;
  gap: 15px 20px;

  flex-wrap: wrap;
  & > * {
    flex: 1;
    min-width: 150px;
  }
`;

const SportsSection = styled.section``;

const SportsStories = styled.div``;

export default SpecialtyStoryGrid;
