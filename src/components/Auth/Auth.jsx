import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { Link } from "react-router-dom";
import userIicon from "../../assets/contacts_icons/auth.jpg";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span className="Login">
      <img src="src/components/Auth/Auth.jsxC:/Users/User/Desktop/IT academy/diploma/src/assets/contacts_icons/auth_picture.jpg" alt="" /> <button onClick={logIn}>Sign in</button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      <span className="Logout">
        <Link to={"/orders"} className="OrderLink"> <img src={userIicon} alt="" /></Link>
        <button onClick={logOut}>Sign out</button>
      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}
