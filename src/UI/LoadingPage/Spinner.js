import React from "react";
import "./LoadingPage.css";

const Spinner = () => {
  return (
    <div className="loading-page">
      <div className="loader" style={{ borderTopColor: "purple" }}></div>
    </div>
  );
};

export default Spinner;
