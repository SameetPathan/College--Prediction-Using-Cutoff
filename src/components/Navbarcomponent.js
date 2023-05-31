import React, { useState } from "react";
import Loader from "./Loader";
function Navbarcomponent(props) {
  return (
    <>
      <Loader></Loader>

      <nav className="navbar navbar-expand-lg navbar-dark bgd">
        <div className="logo-holder logo-3 mr-3">
          <a>
            <h3>Smart Predictor</h3>
            <p>College Prediction using Cutoff </p>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto"></ul>
        </div>
      </nav>
    </>
  );
}

export default Navbarcomponent;
