import React from "react";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const src = isDark
    ? "/wakanda-inu/wakandaswap-logo-with-text.png"
    : "/wakanda-inu/wakandaswap-logo-with-text-dark.png";
  return <img alt="wakandaswap logo" {...props} src={src} />;
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
