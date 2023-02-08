import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function SingleUser() {
  const [loading, loadingState] = useState(false);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const { userId } = useParams();
  let value = userId;
  const getUsers = async (value) => {
    try {
      setError(false);
      loadingState(true);
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      const data = await response.json();
      console.log(data);
      let u = [];
      u.push(data["data"]);
      setUser(u);
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
  ) : (
    <div>
      {user.map((user) => (
        <div key={user.id}>
          <h1>{user.first_name}</h1>
          <h2>{user.email}</h2>
          <img src={user.avatar} alt="" />
        </div>
      ))}
    </div>
  );
}
