import React from "react";
import PropTypes from "prop-types";
import "./popper.scss";

const Popper = ({ title, renderContent }) => {
  return (
    <div className="popper-container">
      <div className="popper-title">
        <h3>{title}</h3>
      </div>
      <div className="popper-content">
        {renderContent()}
      </div>
    </div>
  );
};

Popper.propTypes = {
  title: PropTypes.string.isRequired,
  renderContent: PropTypes.func.isRequired
};

export default Popper;
