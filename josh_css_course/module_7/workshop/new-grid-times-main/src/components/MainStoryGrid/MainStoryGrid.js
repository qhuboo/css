import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletOnly}) {
    border: 3px solid chartreuse;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 3fr fit-content(1fr) fit-content(1fr);
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    gap: 16px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  border-left: 1px solid var(--color-gray-300);
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;

  & > *:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  & > *:first-child {
    padding-left: 16px;
  }

  // We want to target the OpinionSection StoryList component since the other StoryList (child of SecondaryStorySection)
  // does not change flex direction of its dividers.
  @media (${QUERIES.tabletOnly}) {
    & > ${StoryList} {
      flex-direction: row;
    }
    & > ${StoryList} > *:not(last-child) {
      border: none;
      flex: 1;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
