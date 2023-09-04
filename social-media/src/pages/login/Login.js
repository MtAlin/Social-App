import { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "../../hooks/userLogin/UserLogin";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
  };

  let navigate = useNavigate();
  const handleLogin = async () => {
    let response = await UserLogin(email, password);
    if (response) navigate("/", { replace: true });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          </p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</span>

          <Link to="/register" replace>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
