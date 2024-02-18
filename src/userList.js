// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import css from "./userlist.css"

const UserList = ({ onSelect }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        const usersData = response.data.slice(10); // Skip the first 10 users
        setUsers(usersData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>Error fetching users: {error.message}</p>;
  }

  return (
    <div className="userlist">
    <div style={{ flex: 1 }}>
      <h1>Users List</h1>
      {users.length > 0 ? (
        <ol>
          {users.map(user => (
            <li key={ user.id} onClick={() => onSelect(user)}>
              <img id='avatar' src={user.avatar} alt={user.profile.username} style={{ width: 50, borderRadius: '50%' }} />
              <span id='username' style={{ marginLeft: 10 }}>  {user.profile.username}</span><br/>
              <span id='email' style={{ marginLeft: 60 }}> {user.profile.email}</span>
              
            </li>
          ))}
        </ol>
      ) : (
        <p>No users found</p>
      )}
    </div>
    </div>
  );
};

export default UserList;






