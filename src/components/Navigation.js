import React from "react";
import "./Navigation.css"

export default function Navigation() {
  return (
    
      <ul>
        <div id="header">
          <div id="nav">
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
        </div>
      </ul>
    
  );
}
