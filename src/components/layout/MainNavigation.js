import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
