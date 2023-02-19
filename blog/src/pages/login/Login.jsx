import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form className="loginForm">
        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label>Passwrd</label>
        <input type="password" className="loginInput" />
        <button className="loginButton">Login</button>
      </form>
      <div>
        <span>new user?</span>
        <button className="registerButton">
          <Link to="/register" className="link">Register Now</Link>
        </button>
      </div>
    </div>
  );
};
