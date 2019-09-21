import React from 'react'
import { NavLink } from "react-router-dom";

const Friends = () => {
  return (
    <div>
      <h3>My friends</h3>
      <NavLink to="/">
        <button>Back to Dashboard</button>
      </NavLink>
    </div>
  );
};

export default Friends;