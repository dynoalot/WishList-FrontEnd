import React from 'react';
import './MyWishList.css'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import Home from '../assets/home-icon.png';
import Paper from '@material-ui/core/Paper';

const OthersWishList = ({ wishList }) => {

  return (
    <div className="container-wishlist">
      <h3 className="title-wishlist">Wish List</h3>
      <Paper>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Price (€)</th>
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
      </Paper>
      <div className="footer">
        <NavLink to="/dashboard">
          <button className="btn-back-wishlist">Back</button>
          {/* <div classname="home-icon" >
            <img src={Home}/>
          </div> */}
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  wishList: state.wishList
});

export default connect(mapStateToProps)(OthersWishList);