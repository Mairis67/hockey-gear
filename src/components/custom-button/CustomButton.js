import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="customButton" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
