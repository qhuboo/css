import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    size: 16,
  },
  large: {
    size: 24,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const styles = STYLES[size];
  console.log(styles);
  return (
    <>
      <GlobalStyles />

      <InputWrapper isFocused={isFocused} width={width}>
        <IconWrapper>
          <Icon
            style={{
              display: "inline-block",
              verticalAlign: "baseline",
              height: styles.size + "px",
              width: styles.size + "px",
            }}
            id={icon}
          />
        </IconWrapper>

        <Input
          style={{ "--size": styles.size + "px" }}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div`
  width: ${(props) => props.width}px;
  border-bottom: 1px solid black;
  position: relative;
  outline: ${(props) => props.isFocused && "1px dotted #212121"};
  outline: ${(props) => props.isFocused && "5px auto -webkit-focus-ring-color"};
  outline-offset: 2px;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input.attrs({ type: "text" })`
  margin-left: calc(var(--size) + 8px);
  border: none;
  display: inline-block;
  vertical-align: middle;
  width: calc(100% - var(--size) -8px);
  outline: none;
  color: inherit;
  font-weight: 700;
  font-family: "Roboto";

  &::placeholder {
    font-weight: initial;
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  color: inherit;
`;

export default IconInput;
