import React from "react";
import { NavLink } from "react-router-dom";
import './Dashboard.css';
// import Lottie from 'react-lottie';
import animationData from '../assets/heart.json';


const Dashboard = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    path: 'heart.json',
    animationData: animationData,
  };

  return (
    <div className="container-dashboard">
      <h1 className="title-dashboard">Do you have a wish?</h1>
      {/* <Lottie options={defaultOptions} height={300} width={300}/> */}
      <div className="buttons-container-dashboard">
        <NavLink to="/myWishList">
          <button data-testid="my-wishlist" className="btn-dashboard">My Wish List</button>
        </NavLink>
        <NavLink to="/friends">
          <button data-testid="my-friends" className="btn-dashboard">My Friends</button>
        </NavLink>
      </div>
    </div>
  );
};


export default Dashboard;
