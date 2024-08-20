import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>User Directory</h1>
      <SearchBar onSearch={handleSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;