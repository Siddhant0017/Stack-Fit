import React, { useState } from "react";
import { useSignup } from "../../Hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
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

export default Signup;
