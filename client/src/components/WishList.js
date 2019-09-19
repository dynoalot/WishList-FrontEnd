import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const WishList = ({ wishList }) => {
  return (
    <div>
      <h3>My Wish List</h3>
      <NavLink to="/">
        <button>Back to Dashboard</button>
      </NavLink>
      <NavLink to="/NewWishForm">
        <button>Add a wish</button>
      </NavLink>
      <table>
        <tr>
          <th>Description</th>
          <th>Value</th>
          <th>Details</th>
        </tr>
        {wishList.map(wish => (
          <tr>
            <th>{wish.description}</th>
            <th>{wish.value}</th>
            <th>
              <NavLink to="/NewWishForm">
                <button>See Datails</button>
              </NavLink>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  wishList: state.wishList
});

export default connect(mapStateToProps)(WishList);
