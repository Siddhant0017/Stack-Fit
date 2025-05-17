import React, { useState } from "react";
import "./Login.css";
import { useLogin } from "../../Hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const {login, error} = useLogin();

  const handleSubmit =async (e)=>{
    e.preventDefault();
    await login(email,password);
    setEmail("");
    setPassword("");
    // console.log(email,password);

  }
  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="">Email :</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password :</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
