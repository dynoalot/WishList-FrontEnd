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
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {wishList.map(wish => (
            <tr key={wish.id}>
              <td>{wish.description}</td>
              <td>{wish.price}</td>
              <td>
                <NavLink to="/NewWishForm">
                  <button>See Details</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  wishList: state.wishList
});

export default connect(mapStateToProps)(WishList);
