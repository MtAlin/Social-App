import "./Register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setUserName("");
    setEmail("");
    setName("");
  };
  console.log(name);
  const register = async () => {
    const initial = name.split(" ");
    const first = initial[0][0].toUpperCase();
    const last = initial[1][0].toUpperCase();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        {
          name: name,
          email: email,
          avatar: `${first}${last}`,
          password: password,
          username: userName,
        }
      );
      console.log(response);
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          </p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</span>
          <Link to="/login" replace>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
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
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={register}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
