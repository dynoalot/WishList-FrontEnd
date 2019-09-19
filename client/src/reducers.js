const INITIAL_STATE = {
  wishList: [],
  users: []
};

const reducers = (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case 'ADD_WISH':
      return {
        ...state,
        wishList: [...state.wishList, action.wishList]
      };
    default:
      return state;
  }

}; 

export default reducers;