import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <div>
      <h2>Please Register Now</h2>
      <form>
        <input type="text" placeholder="Enter name" />
        <br />
        <input type="email" placeholder="Enter your email" />
        <br />
        <input type="password" placeholder="Enter your password" />
        <br />
        <input type="submit" value="register" />
      </form>
    </div>
  );
};

export default Register;
