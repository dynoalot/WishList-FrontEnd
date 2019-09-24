import React from "react";
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import MyWishList from "./components/MyWishList";
import NewWishForm from './components/NewWishForm';
import Friends from "./components/Friends";
import OthersWishList from "./components/OthersWishList";

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/dashboard" component={Dashboard} exact/>
          <Route path="/myWishList" component={MyWishList}/>
          <Route path="/newWishForm" component={NewWishForm}/>
          <Route path="/friends" component={Friends}/>
          <Route path="/friendsWishList/:id" component={OthersWishList}/>
      </Router>
    </div>
  );
}

export default App;
