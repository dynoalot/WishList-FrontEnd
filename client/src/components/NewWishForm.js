import React, { useState } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { addWish } from '../actions';

const NewWishForm = ({addWish}) => {
  const initialState = {
    description: '',
    price: '',
    link: '',
    notes: ''
  };

  const [wish, setWish] = useState(initialState);

  const handleSubmit = event => {
    event.preventDefault();
    addWish(wish);
  }

  const handleChange = (event,key) => {
    const { value } = event.target;
    const updatedState = {...wish,[key]: value } 
    setWish(updatedState);

  }

  return (
    <form >
      <p>My New Wish</p>
      <label>Description </label>
      <input
        type="text"
        required
        onChange={(e)=> handleChange(e,'description')}  placeholder="Description of my Wish"
      /><br/>
      <label>Price </label>
      <input
        type="number"
        required
        onChange={(e)=> handleChange(e,'price')}
        placeholder="How much does my wish costs"
      /><br/>
      <label>Link </label>
      <input
        type="text"
        onChange={(e)=> handleChange(e,'link')}
        placeholder="URL to my wish"
      /><br/>
      <label>Notes </label>
      <input
        type="text"
        onChange={(e)=> handleChange(e,'notes')}
        placeholder="Further information to my wish"
      /><br/>
      <div>
        <NavLink to="/WishList">
          <button>Cancel</button>
        </NavLink>
        <button onClick={handleSubmit} type="submit">Submit</button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
	wishList: state.wishList
});

const mapDispatchToProps = (dispatch) => ({
	addWish: (wish) => dispatch(addWish(wish))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewWishForm);
