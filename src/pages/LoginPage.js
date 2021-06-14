import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const previousObjectURL = location.state?.from;

  const auth = useAuth();
  const handleLogin = () => {
    auth.login();
    history.push(previousObjectURL || "/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Signing</button>
    </div>
  );
}
