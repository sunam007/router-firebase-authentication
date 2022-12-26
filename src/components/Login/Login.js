import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2> Please Login</h2>
      <button
        onClick={signInWithGoogle}
        style={{
          margin: "10px 0",
          padding: "5px 10px",
          backgroundColor: "lavender",
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
      <form>
        <input type="email" placeholder="Enter your email" />
        <br />
        <input type="password" placeholder="Enter your password" />
        <br />
        <input
          type="submit"
          value="Login"
          style={{
            margin: "10px 0",
            padding: "5px 10px",
            backgroundColor: "lavender",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
};

export default Login;
