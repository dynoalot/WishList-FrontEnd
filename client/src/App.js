import React from "react";
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import MyWishList from "./components/MyWishList";
import NewWishForm from './components/NewWishForm';
import Friends from "./components/Friends";

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/mywishist" component={MyWishList}/>
          <Route path="/newwishform" component={NewWishForm}/>
          <Route path="/friends" component={Friends}/>
      </Router>
    </div>
  );
}

export default App;
