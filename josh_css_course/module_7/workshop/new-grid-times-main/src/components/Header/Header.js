import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <MainHeaderDesktop>
        <Row>
          <Side>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
          </Side>
          <Logo />
          <Side>
            <SubscribeButton>
              <Button style={{ marginBottom: "15px" }}>Subscribe</Button>
              <Sublink>Already a subscriber?</Sublink>
            </SubscribeButton>
          </Side>
        </Row>
      </MainHeaderDesktop>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  @media (${QUERIES.laptopAndUp}) {
    padding: 0;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 84px;
  }
  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const MainHeaderDesktop = styled(MaxWidthWrapper)`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: revert;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const SubscribeButton = styled.div`
  // border: 2px dashed blue;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  font-size: 14px;
`;

const Sublink = styled.a`
  font-size: 0.875rem;
  color: var(--color-gray-900);
  font-style: italic;
  text-decoration: underline;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  &:last-of-type {
    justify-content: end;
    align-items: end;
  }
`;

export default Header;
