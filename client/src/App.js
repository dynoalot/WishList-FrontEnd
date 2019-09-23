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
          <Route path="/MyWishList" component={MyWishList}/>
          <Route path="/NewWishForm" component={NewWishForm}/>
          <Route path="/Friends" component={Friends}/>
      </Router>
    </div>
  );
}

export default App;
