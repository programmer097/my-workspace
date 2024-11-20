import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./styles.css";
import Tasks from "./components/Tasks/Tasks";
import LoginPage from "./components/LoginPage/LoginPage";

export default function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}
