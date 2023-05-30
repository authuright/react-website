import React from "react";
import "./LogIn.css";
const LogIn = () => {
  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
