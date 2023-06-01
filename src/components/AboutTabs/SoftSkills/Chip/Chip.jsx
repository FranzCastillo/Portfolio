import React from "react";
import PropTypes from "prop-types";
import "./Chip.scss";

function Chip({ skill }) {
  return (
    <div className="chip">
      <p>{skill}</p>
    </div>
  );
}

Chip.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default Chip;
