import React from 'react';
import { NavLink } from "react-router-dom";

const NewWishForm = () => {

  const handleSubmit = event => {
    event.preventDefault();
    // more logic here
    // onWishCreate()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>My New Wish</p>
      <label>Description </label>
      <input type="text"/>
      <label>Value </label>
      <input type="number"/>
      <label>Link </label>
      <input type="text"/>
      <lable>Notes </lable>
      <input type="text"/>
      <div>
        <NavLink to="/WishList">
          <button>Cancel</button>
        </NavLink>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
 
export default NewWishForm;