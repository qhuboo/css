import React from "react";
import styled, { keyframes } from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const moveUp = keyframes`
from {
  transform: translateY(0%);
}
to {
  transform: translateY(-100%);
}
`;

const moveDown = keyframes`
{
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}
`;
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <RegularLinkText>Sale</RegularLinkText>
            <BoldLinkText>Sale</BoldLinkText>
          </NavLink>
          <NavLink href="/new">
            <RegularLinkText> New&nbsp;Releases</RegularLinkText>
            <BoldLinkText> New&nbsp;Releases</BoldLinkText>
          </NavLink>
          <NavLink href="/men">
            <RegularLinkText>Men</RegularLinkText>
            <BoldLinkText>Men</BoldLinkText>
          </NavLink>
          <NavLink href="/women">
            <RegularLinkText>Women</RegularLinkText>
            <BoldLinkText>Women</BoldLinkText>
          </NavLink>
          <NavLink href="/kids">
            <RegularLinkText>Kids</RegularLinkText>
            <BoldLinkText>Kids</BoldLinkText>
          </NavLink>
          <NavLink href="/collections">
            <RegularLinkText>Collections</RegularLinkText>
            <BoldLinkText>Collections</BoldLinkText>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const RegularLinkText = styled.div`
  transition: transform 400ms;
`;

const BoldLinkText = styled.div`
  font-weight: 800;
  position: absolute;
  transition: transform 400ms;
`;

const NavLink = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:hover {
    & ${RegularLinkText} {
      transition: transform 200ms;
      transform: translateY(-100%);
    }

    & ${BoldLinkText} {
      transition: transform 200ms;
      transform: translateY(-100%);
    }
  }
`;

export default Header;
