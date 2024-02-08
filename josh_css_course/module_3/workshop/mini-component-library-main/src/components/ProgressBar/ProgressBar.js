/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper role="progressbar" aria-valuenow={value} size={size}>
      <Progress role="presentation" value={value} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: ${(props) => (props.size === "large" ? "8px" : "4px")};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Progress = styled.div`
  width: ${(props) =>
    props.size === "large"
      ? `calc((100% - 8px) * ${props.value / 100})`
      : `calc((100%) * ${props.value / 100})`};
  margin: ${(props) => (props.size === "large" ? "4px" : 0)};
  background-color: ${COLORS.primary};
  height: ${(props) =>
    props.size === "large" ? "16px" : props.size === "medium" ? "12px" : "8px"};
  border-radius: ${(props) => {
    if (props.size === "large") {
      return props.value === 100 ? "4px" : "4px 0px 0px 4px";
    } else {
      return 0;
    }
  }};
`;

export default ProgressBar;
