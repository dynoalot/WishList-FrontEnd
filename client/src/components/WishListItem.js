import React from 'react';

const WishListItem = ({wish}) => {
  return (
    <div>
      <span>{wish.description}</span>
      <span>{wish.value}</span>
      <span>{wish.link}</span>
      <span>{wish.notes}</span>
  </div>
  );
}
 
export default WishListItem;