import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <article className="about-container">
            <h1>What we are all about</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
              est laborum.
            </p>
            <button className="about-menuBtn">
                <Link to="/Menu">Menu</Link>
            </button>
        </article>
    
    )
}