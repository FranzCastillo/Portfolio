import React from "react";
import PropTypes from "prop-types";
import "./ImageDisplay.scss";

function ImageDisplay({ title, imageLink }) {
  return (
    <div className="image-display">
      <img src={imageLink} alt={title} />
      <div className="title">
        {/* <p>{title}</p> */}
      </div>
    </div>
  );
}

ImageDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
};

export default ImageDisplay;
