import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Typical from "react-typical";


ReactDOM.render(
  <React.StrictMode >
      <div className="container">
        <header className="header">
          <h1>404 Page</h1>
          <Typical steps={["Nothing to see here"]} wrapper="p" className="typical"/>
        </header>
      </div>
  </React.StrictMode>,
  document.getElementById("root")
);