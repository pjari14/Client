import React, { useState, useEffect } from "react";

function UsersTable() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/user/get");
      const jsonData = await response.json();
      setUsers(jsonData.user);
      console.log(jsonData);
    }
    fetchData();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.address}</td>
              <td>{user.contact}</td>
              <td>{user.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
