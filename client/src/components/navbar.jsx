import {Link, useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {

    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", ""); //setting access token to be an empty token
        window.localStorage.removeItem("userID");    //clear userID in local storgage
        navigate("/"); //caling navigate for rediraction after logout
    }


     return (
        <div className="navbar">
            <Link to="/"> Home </Link>
            <Link to="/create-recipe"> Create Recipe </Link>
            <Link to="/saved-recipes"> Saved Recipes </Link>
            {!cookies.access_token ? (<Link to="/auth"> Login/Register</Link>): 
            (<button onClick={logout}>Logout</button>)}
    </div> 
    );
};