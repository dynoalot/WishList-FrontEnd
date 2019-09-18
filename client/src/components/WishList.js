import React from 'react';
import { NavLink } from "react-router-dom";

const WishList = () => {

  return (
    <div>
      <h3>My Wish List</h3>
      <NavLink to="/">
        <button>Back to Dashboard</button>
      </NavLink>
      <NavLink to="/NewWishForm">
        <button>Add a wish</button>
      </NavLink>
    </div>
  );

}

export default WishList;