import { useState, useEffect } from "react";

const useFetchUsers = (initialPage = 1, resultPerPage = 10) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      console.log("here0");
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page${page}&results=${resultPerPage}`
        );
        if (!response.ok) {
          throw new Error("failed to fetch users");
        }
        const data = await response.json();
        console.log(data);

        setUsers(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page, resultPerPage]);

  return { users, page, setPage, loading, error };
};

export default useFetchUsers;
