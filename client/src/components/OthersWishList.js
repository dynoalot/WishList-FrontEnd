import React from 'react';
import './OthersWishList.css'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


const OthersWishList = ({ wishList }) => {

  // useEffect(() => {
  //   getFriendsWishes();
  // }, []);

  // const getFriendsWishes = () => {
  //   fetch("http://localhost:5000/wishlist/:userId")
  //     .then(result => result.json())
  //     .then(friendsWish => {
  //       setWishes(friendsWish);
  //     });
  // };


  return (
    <div className="container-friendswishlist">
      <h3 className="title-friendswishlist">Wish List</h3>
      <table className="table-friendswishlist">
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
                <NavLink to="/newwishform">
                  <button>See Details</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer-friendswishlist">
        <NavLink to="/friends">
          <button className="btn-back-friendswishlist">Back</button>
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  wishList: state.wishList
});

export default connect(mapStateToProps)(OthersWishList);