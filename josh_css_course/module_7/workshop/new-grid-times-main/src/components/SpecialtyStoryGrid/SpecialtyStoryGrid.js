import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
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
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (${QUERIES.laptopAndUp}) {
    flex-direction: row;
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  flex: 1;
  min-width: 0;
  @media (${QUERIES.laptopAndUp}) {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 15px 20px;
`;

const SportsSection = styled.section`
  flex: 1;
  min-width: 0;
  @media (${QUERIES.laptopAndUp}) {
    padding-left: 16px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    gap: 16px;
    white-space: nowrap;
    overflow: auto;

    & > * {
      flex: 1;
      min-width: 220px;
      white-space: normal;
    }
  }
`;

export default SpecialtyStoryGrid;
