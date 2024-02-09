import { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const [isFocused, setIsFocused] = useState(false);
  const displayedValue = getDisplayedValue(value, children);

  return (
    <NewSelect value={value} onChange={onChange} isFocused={isFocused}>
      <InvisibleSelect
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {children}
      </InvisibleSelect>
      <DisplayValue>{displayedValue}</DisplayValue>
      <Icon
        style={{
          display: "inline-block",
          verticalAlign: "middle",
          color: "inherit",
        }}
        id="chevron-down"
      />
    </NewSelect>
  );
};

const InvisibleSelect = styled.select`
  border: 1px dashed red;
  opacity: 0;
  position: absolute;
  inset: 0;
  margin: auto;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const NewSelect = styled.div`
  width: max-content;
  background-color: ${COLORS.transparentGray15};
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};
  outline: ${(props) => props.isFocused && "1px dotted #212121"};
  outline: ${(props) => props.isFocused && "5px auto -webkit-focus-ring-color"};

  &:hover {
    color: black;
  }
`;

const DisplayValue = styled.span`
  color: inherit;
  margin-right: 20px;
`;

export default Select;
