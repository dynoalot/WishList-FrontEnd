import React, { useState } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { addWish } from '../actions';

const NewWishForm = ({addWish, history}) => {
  const initialState = {
    description: '',
    price: '',
    link: '',
    notes: '',
    id: ''
  };

  const [wish, setWish] = useState(initialState);

  const handleSubmit = event => {
    event.preventDefault();
    addWish(wish);
    history.push("/WishList")
  }

  const handleInput = (event,key) => {
    const { value } = event.target;
    const updatedState = {...wish,[key]: value} 
    setWish(updatedState);
  }

  return (
    <form >
      <p>My New Wish</p>
      <label>Description </label>
      <input
        type="text"
        required
        onChange={(e)=> handleInput(e,'description')}  placeholder="Describe wish"
      /><br/>
      <label>Price </label>
      <input
        type="text"
        required
        onChange={(e)=> handleInput(e,'price')}
        placeholder="Costs of wish"
      /><br/>
      <label>Link </label>
      <input
        type="text"
        onChange={(e)=> handleInput(e,'link')}
        placeholder="URL to wish"
      /><br/>
      <label>Notes </label>
      <input
        type="text"
        onChange={(e)=> handleInput(e,'notes')}
        placeholder="Further information"
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewWishForm));
