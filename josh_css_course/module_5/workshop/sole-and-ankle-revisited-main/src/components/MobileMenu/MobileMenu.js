/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
        </CloseButton>
        <Filler />
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background-color: white;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  flex-direction: column;

  & > a {
    font-size: 18px;
    text-decoration: none;
    font-weight: ${WEIGHTS.medium};
    text-transform: uppercase;
    color: inherit;
  }

  & > a:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  padding: 16px;
  top: 10px;
  right: 0;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;

  & > a {
    color: ${COLORS.gray[700]};
    text-decoration: none;
    font-size: 14px;
  }
`;

export default MobileMenu;
