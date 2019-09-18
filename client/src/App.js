import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import WishList from "./components/WishList";
import WishListItem from './components/WishListItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/WishList/" component={WishList}/>
          <Route path="/wishList/WishListItem" component={WishListItem}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
