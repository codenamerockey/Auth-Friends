import React from 'react';
import { Route, Link } from 'react-router-dom';
import Private from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/login">Login</Link>
      </div>

      <div>
        <Link to="/friends_list">Friends List</Link>
      </div>

      <Route path="/login" component={Login} />
      <Private path="/friends_list" component={FriendsList} />
    </div>
  );
}

export default App;
