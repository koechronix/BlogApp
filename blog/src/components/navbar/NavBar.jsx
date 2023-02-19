import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = false;
  return (
    <div className="nav">
      <div className="navLeft">
        <i class="navIcons fab fa-facebook-square "></i>
        <i class="navIcons fab fa-instagram "></i>
        <i class="navIcons fab fa-twitter "></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          {/* <li className="navListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li> */}
          <li className="navListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img
            className="navImg"
            src="https://images.unsplash.com/photo-1578001357658-46d0b9d5ec79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="profile"
          />
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i class="fa-solid fa-magnifying-glass navSearchIcon"></i>
      </div>
    </div>
  );
};


export default NavBar;