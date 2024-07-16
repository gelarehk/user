import React from "react";
import useFetchUsers from "./useFetchUsers";

const UserList = () => {
  const { users, page, setPage, loading, error } = useFetchUsers();

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="users">
      <h1>User List</h1>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <ul>
        {users && users.length > 0
          ? users.map((user) => (
              <li key={user.login.uuid}>
                <img
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                />
                <p>{`${user.name.first} ${user.name.last}`}</p>
              </li>
            ))
          : !loading && <p>No users found.</p>}
      </ul>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span> Page {page} </span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default UserList;
