import React, { useState } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { addWish } from '../actions';
import './NewWishForm.css';

const NewWishForm = ({addWish, history}) => {
  const initialState = {
    description: '',
    price: '',
    link: '',
    notes: ''
  };

  const [wish, setWish] = useState(initialState);

  const handleSubmit = event => {
    event.preventDefault();
    // fetch("http://localhost:5000/wishlist/1", {
    //   method: 'POST',
    //   body: JSON.stringify({description, price, link, notes}),
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    //   .then(getMyWishes())
    // })
    addWish(wish);
    history.push("/WishList")
  }

  const handleInput = (event,key) => {
    const { value } = event.target;
    const updatedState = {...wish,[key]: value} 
    setWish(updatedState);
  }

  return (
    <div className="container-form">
      <h3 className="title-form">My New Wish</h3>
      <form className="form-input-btn">
        <div class="form-group">
          <label>Description</label>
          <input type="text" onChange={(e)=> handleInput(e,'description')}/>
        </div>
        <div class="form-group">
          <label>Price</label>
          <input type="text" onChange={(e)=> handleInput(e,'price')}/>
        </div>
        <div class="form-group">
          <label>Link</label>
          <input type="text" onChange={(e)=> handleInput(e,'link')}/>
        </div>
        <div class="form-group">
          <label>Notes</label>
          <input type="text" className="notes" onChange={(e)=> handleInput(e,'notes')}/>
        </div>
        <div className="container-btn-form">
          <NavLink to="/WishList">
            <button className="btn-form">Cancel</button>
          </NavLink>
          <button className="btn-form" onClick={handleSubmit} type="submit">Submit</button>
        </div>
      </form>
      <div className="footer-form">
        <NavLink to="/MyWishList">
          <button className="btn-back-form">Back</button>
        </NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
	wishList: state.wishList
});

const mapDispatchToProps = (dispatch) => ({
	addWish: (wish) => dispatch(addWish(wish))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewWishForm));
