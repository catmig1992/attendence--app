import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", ""); //setting access token to be an empty token
    window.localStorage.removeItem("userID"); //clear userID in local storgage
    navigate("/auth"); //caling navigate for redirectionto auth page(login/register) after logout
  };

  return (
    <div className="navbar">
      <Link class="nav-link" to="/">
        {" "}
        Home{" "}
      </Link>
      <Link class="nav-link" to="/about">
        {" "}
        About{" "}
      </Link>
      <Link class="nav-link" to="/portal">
        {" "}
        Portal{" "}
      </Link>
      {!cookies.access_token ? (
        <Link to="/auth"> Login/Register</Link>
      ) : (
        <button class="logout" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};
