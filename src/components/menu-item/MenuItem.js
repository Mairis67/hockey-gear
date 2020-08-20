import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} homepage__menuItem`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
