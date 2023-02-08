import { Routes, Route, Link, NavLink } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Users from "./Users";
import Login from "./Login";
import AllRoutes from "./Routes";
function NavBar() {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/login", title: "Login" },
    { path: "/Users", title: "Users" },
  ];
  const activeLinkStyle = { textDecoration: "none", color: "tomato" };
  const defaultLinkStyle = { textDecoration: "none", color: "teal" };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.path}
              style={({ isActive }) => {
                return isActive ? activeLinkStyle : defaultLinkStyle;
              }}
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
      <div>
        <AllRoutes />
      </div>
    </div>
  );
}

export default NavBar;
