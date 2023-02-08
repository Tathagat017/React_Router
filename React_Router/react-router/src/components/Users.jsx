import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, loadingState] = useState(false);

  const getUsers = async () => {
    try {
      setError(false);
      loadingState(true);
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      setUsers(data.data);
      loadingState(false);
    } catch (error) {
      setError(true);
      loadingState(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : error ? (
    <h2>Something went wrong</h2>
  ) : (
    <div>
      {users?.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              display: "grid",
              width: "40%",
              margin: "auto",
            }}
          >
            <div
              style={{ border: "1px solid black", margin: "2%", width: "100%" }}
            >
              <img src={el.avatar} style={{ borderRadius: "50%" }}></img>
              <h2>{`${el.first_name + " " + el.last_name}`}</h2>
              <p>{el.email}</p>
              <Link to={`/users/${el.id}`}>More Info</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

//* get users from database https://reqres.in/api/users
//display data on UI
//loading indicator
// error message on UI
