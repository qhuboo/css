import React, { useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const selectRef = useRef(null);
  const handleWrapperClick = () => {
    selectRef.current.focus();
  };
  return (
    <SelectWrapper
      onClick={handleWrapperClick}
      value={value}
      onChange={onChange}
    >
      <DisplayValue>{displayedValue}</DisplayValue>
      <Icon
        style={{
          display: "inline-block",
          verticalAlign: "middle",
          color: "inherit",
        }}
        id="chevron-down"
      />
      <InvisibleSelect ref={selectRef}>{children}</InvisibleSelect>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  width: max-content;
  background-color: ${COLORS.transparentGray15};
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const InvisibleSelect = styled.select`
  border: 1px dashed red;
  opacity: 0;
  position: absolute;
  inset: 0;
  margin: auto;
`;

const DisplayValue = styled.span`
  color: inherit;
  margin-right: 24px;
`;

export default Select;
