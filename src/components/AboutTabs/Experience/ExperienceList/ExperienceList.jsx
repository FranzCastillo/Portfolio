import React from "react";
import PropTypes from "prop-types";
import "./ExperienceList.scss";

function ExperienceList({ items }) {
  console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

ExperienceList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ExperienceList;
