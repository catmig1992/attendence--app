import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", ""); //setting access token to be an empty token
    window.localStorage.removeItem("userID"); //clear userID in local storage
    navigate("/auth"); //calling navigate for redirection to auth page(login/register) after logout
  };

  return (
    <div className="navbar">
      <Link className="nav-link" to="/">
        {" "}
        Home{" "}
      </Link>
      <Link className="nav-link" to="/about">
        {" "}
        About{" "}
      </Link>

      <Link className="nav-link" to="/portal">
        {" "}
        Portal{" "}
      </Link>
      {/* consider updating layout or deleting */}

      <Link className="nav-link" to="/create-class">
        {" "}
        Create Profiles{" "}
      </Link>
      {/* consider updating end-point name? from /create-class to /create-profiles or /create-roster */}

      <Link className="nav-link" to="/student-profiles">
        {" "}
        Student Profiles{" "}
      </Link>
      {!cookies.access_token ? (
        <Link to="/auth"> Login/Register</Link>
      ) : (
        <button className="logout" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};
