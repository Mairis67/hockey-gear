import React from "react";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} homepage__menuItem`}>
    <div
      className="homepage__backgroundImage"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="homepage__content">
      <h1 className="homepage__title">{title.toUpperCase()}</h1>
      <span className="homepage__subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
