import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

// There are still some issues with the focus outline in safari when including the VisuallyHidden component

const STYLES = {
  small: {
    size: 16,
    height: 24,
    borderThickness: 1,
    fontSize: 14,
  },
  large: {
    size: 24,
    height: 36,
    borderThickness: 2,
    fontSize: 18,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const styles = STYLES[size];
  console.log(styles);
  return (
    <InputWrapper
      isFocused={isFocused}
      width={width}
      style={{ "--border-thickness": styles.borderThickness + "px" }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.size + "px" }}>
        <Icon id={icon} size={size} />
      </IconWrapper>

      <Input
        style={{
          "--size": styles.size + "px",
          "--height": styles.height + "px",
          "--font-size": styles.fontSize / 16 + "rem",
          "--border-thickness": styles.borderThickness + "px",
        }}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: ${(props) => props.width}px;
  line-height: 0;
  border-bottom: var(--border-thickness) solid black;
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
  padding-left: var(--height);
  padding-right: 0px;
  padding-block: 0px;
  border: none;
  width: 100%;
  height: calc(var(--height) - var(--border-thickness));
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;
  font-family: "Roboto";

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: initial;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--size);
  height: var(--size);
  color: inherit;
`;

export default IconInput;
