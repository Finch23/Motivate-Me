import React from "react";
import "./avatar.css";


// The avatar component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const avatar = props => (
  <div
    className="avatar"
    role="img"
    aria-label="Recipe Image"
    style={{
      backgroundImage: `url(${props.src})`
    }}
  />
);

export default avatar;