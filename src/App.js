// App.js
import React, { useState } from 'react';
import UserList from './userList';
import UserDetails from './userDetails';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <UserList onSelect={handleUserSelect} />
      <UserDetails user={selectedUser} />
    </div>
  );
};

export default App;

