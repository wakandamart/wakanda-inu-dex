import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const WKDLogo = "/wakanda-inu/wakandaswap-logo_32X32.png";
const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${WKDLogo});
  background-color: transparent;
  box-shadow: none;
  border: 0;
  cursor: ${getCursorStyle};
  width: 32px;
  height: 32px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translateY(3px);
  transition: 200ms transform;
  &:hover {
    transform: ${disabled ? "scale(1) translateY(3px)" : "scale(1.1) translateY(4px)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 0;
  width: calc(100% - 32px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;
  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }
  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }
  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "inputSecondary"]};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 100%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 10px;
  position: absolute;
  top: 18px;
`;
