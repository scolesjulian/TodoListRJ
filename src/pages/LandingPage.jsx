import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <header style={HeaderStyle}>
      <h1 align="center">Wellcome to your To Do List!</h1>
      <div className="buttons text-center">
        <Link to="/login">
          <button className="btn btn-secondary">LogIn</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-success">
            <span>Register </span>
          </button>
        </Link>
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  padding: "100px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
