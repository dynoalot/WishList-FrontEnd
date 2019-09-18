import React from "react";
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";


import Dashboard from "./components/Dashboard";
import WishList from "./components/WishList";
import NewWishForm from './components/NewWishForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/WishList/" component={WishList}/>
          <Route path="/NewWishForm" component={NewWishForm}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
