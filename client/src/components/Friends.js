import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Friends.css';

const Friends = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("http://localhost:5000/user")
      .then(result => result.json())
      .then(user => {
        setUsers(user);
      });
  };

  return (
    <div className="container-myFriends">
      <h3 className="title-myFriends">My friends</h3>
      <div className="buttons-container-myFriends">
        {users.slice(1).map(user => (
          <button className="btn-name-myFriends">{user.username}</button>
        ))}
      </div>
      <div className="footer-myFriends">
        <NavLink to="/">
          <button className="btn-back-myFriends">Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Friends;