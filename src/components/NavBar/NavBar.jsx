import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <nav> 
      <div className="navLogo">My Favorite Episode</div>
     <div className="navUserArea">
      <span className="navWelcome">Welcome, {user.name}</span>
      &nbsp;  &nbsp;
     <div className="navLinks"> <Link to="/">
      Home  
      </Link>
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link></div></div>
    </nav>
  );
}
/*
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">
        <button className="navBtn">Home</button>
      </NavLink>
    </div>
  );
}

*/ 