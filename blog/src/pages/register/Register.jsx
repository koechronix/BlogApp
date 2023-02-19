import { Link } from "react-router-dom";
import "./register.css";

export const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input type="password" className="registerInput" />
        <button className="registerButton">Register</button>
      </form>
      <div>
        <span>existing user?</span>
        <button className="loginButton">
          <Link to="/login" className="link">Login</Link>
        </button>
      </div>
    </div>
  );
};
