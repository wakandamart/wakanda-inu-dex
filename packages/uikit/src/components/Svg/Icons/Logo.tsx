import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img alt="wakandaswap logo" {...props} src="/wakanda-inu/wakandaswap-logo.png" />;
};

export default Icon;
