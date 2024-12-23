import "./Login.scss";
import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((e) => {
      alert(e.message);
    });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="./discordIcon.png" alt="" />
      </div>
      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
}

export default Login;
