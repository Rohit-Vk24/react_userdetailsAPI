// UserDetails.js
import React from 'react';
import css from "./userdetails.css"

const UserDetails = ({ user }) => {
  return (
    <div className="userdetails">
    <div style={{ flex: 1 }}>
      <h2>User Details</h2>
      {user ? (
        <div>
          <img src={user.avatar} alt={user.profile.username} style={{ width: 100, borderRadius: '50%' }} />
          <p id='name'> <span style={{fontWeight: 'bold'}}>Name: </span> {user.profile.firstName} {user.profile.lastName}</p>
          <p id='emailid'><span style={{fontWeight: 'bold'}}>ID: </span> {user.id}</p>
          <p id='emailid'><span style={{fontWeight: 'bold'}}>Email: </span> {user.profile.email}</p>
          <p id='job'><span style={{fontWeight: 'bold'}}>Job Title: </span> {user.jobTitle}</p>
          <p id='bio'><span style={{fontWeight: 'bold'}}>Bio: </span> {user.Bio}</p>
        </div>
      ) : (
        <p>No user selected</p>
      )}
    </div>

    <h3>Made by N Rohit</h3>
    </div>
  );
};

export default UserDetails;




