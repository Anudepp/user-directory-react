import React, { useState } from 'react';
import UserCard from './UserCard';

const ITEMS_PER_PAGE = 5;

function UserList({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const handlePageChange = (direction) => {
    setCurrentPage(prevPage => prevPage + direction);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  return (
    <div>
      <div className="user-list">
        {paginatedUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(-1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;