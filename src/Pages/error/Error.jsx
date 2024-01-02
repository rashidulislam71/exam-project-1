import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <div className="error_page">
        <div className="errorContent">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <span>Reload</span> 
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
