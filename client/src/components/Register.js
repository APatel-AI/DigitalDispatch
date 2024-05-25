import React, { useState } from "react";
import "../App.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(ev){
    ev.preventDefault();
    await fetch('http://localhost:4000/register', {
      method: 'POST', 
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'}
    })
  }
  return (
    <form className="register" onSubmit={registerUser}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
