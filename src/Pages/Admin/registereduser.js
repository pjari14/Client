import React, { useState, useEffect } from "react";

function UsersTable() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  function fetchUsers() {
    fetch("http://localhost:5000/user/display/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.data);
        const transformUser = data.data.data.map((userData) => {
          return {
            fname: userData.firstname,
            lname: userData.lastname,
            address: userData.address,
            contact: userData.contact,
            email: userData.email,
          };
        });

        setUser(transformUser);
      });
  }

  return (
    <div class="container-fluid d-flex">
      <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
        <div className="overflow-auto">
          <h1 class=" my-5  mb-1 fs-1 text-dark ">Registered Users List</h1>
          <hr />

          <div class="container table-responsive ">
            <table class="table  table-hover  ">
              <thead class="table-dark text-light">
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  {/* <th>Password</th> */}
                </tr>
              </thead>
              <tbody>
                {user.map((e) => (
                  <>
                    <tr>
                      <td>
                        {e.fname.charAt(0).toUpperCase() + e.fname.slice(1)}
                      </td>
                      <td>
                        {e.lname.charAt(0).toUpperCase() + e.lname.slice(1)}
                      </td>
                      <td>{e.address}</td>
                      <td>{e.contact}</td>
                      <td>{e.email}</td>
                    </tr>
                  </>
                ))}
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
