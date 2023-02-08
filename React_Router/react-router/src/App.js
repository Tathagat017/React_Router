import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
