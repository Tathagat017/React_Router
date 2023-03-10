import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Users from "./Users";
import Login from "./Login";
import SingleUser from "./SingleUserPage";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userId" element={<SingleUser />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
