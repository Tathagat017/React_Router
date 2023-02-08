import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Users from "./Users";
import Login from "./Login";
import AllRoutes from "./Routes";
function NavBar() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">Users</Link>
      </div>
      <div>
        <AllRoutes />
      </div>
    </div>
  );
}

export default NavBar;
