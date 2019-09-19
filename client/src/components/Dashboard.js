import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <h1>Do you have a wish?</h1>
      <Link to="/WishList">
        <button>My Wish List</button>
      </Link>
    </div>
  );
};

export default Dashboard;
