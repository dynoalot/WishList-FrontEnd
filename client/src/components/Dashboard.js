import React from "react";
import { NavLink } from "react-router-dom";
import WishList from "./WishList";

const Dashboard = () => {
  return (
    <div>
      <h1>Do you have a wish?</h1>
      <NavLink to="/WishList">
        <button>My Wish List</button>
      </NavLink>
    </div>
  );
};

export default Dashboard;
