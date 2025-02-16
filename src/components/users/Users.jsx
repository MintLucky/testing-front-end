import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(resp.data);
  }

  useEffect(() => {
    loadUsers()
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} data-testid="user-item">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;