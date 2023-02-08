import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function SingleUser() {
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);

  async function getData(userID) {
    let url = `https://reqres.in/api/users/${userId}`;
    fetch(url)
      .then((res) => {
        setLoading(true);
        return res.json();
      })
      .then(async (receivedData) => {
        console.log(receivedData["data"]);
        setUser(receivedData["data"]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }
  // "data": {
  // "id": 1,
  // "email": "george.bluth@reqres.in",
  // "first_name": "George",
  // "last_name": "Bluth",
  // "avatar": "https://reqres.in/img/faces/1-image.jpg"
  // },

  function userShow(user) {
    return (
      <div>
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <img src={user.avatar} alt=""></img>
        <p>{user.email}</p>
      </div>
    );
  }

  useEffect(() => {
    getData(userId);
  }, []);

  //   useEffect(() => {
  //     getData(userId);
  //   }, [user]);
  return loading ? <h1>Loading</h1> : <div>{userShow(user)}</div>;
}
