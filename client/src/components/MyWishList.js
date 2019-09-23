import React, { useState, useEffect } from "react";
import './MyWishList.css'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import Home from '../assets/home-icon.png';
import { setWishes } from '../actions';

const MyWishList = ({ wishList, setWishes }) => {
  
  useEffect(() => {
    getMyWishes();
  }, []);

  const getMyWishes = () => {
    fetch("http://localhost:5000/wishlist/1")
      .then(result => result.json())
      .then(myWish => {
        setWishes(myWish);
      });
  };

  return (
    <div className="container-wishlist">
      <h3 className="title-wishlist">My Wish List</h3>
      <div className="add-btn-container">
        <NavLink to="/NewWishForm">
          <button className="btn-addwish">Add a wish</button>
        </NavLink>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="">Description</th>
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
      <div className="footer-wishlist">
        <NavLink to="/">
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
const mapDispatchToProps = dispatch => ({
  setWishes: (wishList)=>dispatch(setWishes(wishList))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyWishList);
