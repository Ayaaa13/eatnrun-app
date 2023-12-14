import React from "react";
import Logo from "../components/logo";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <div className="mainLogin">
      <header>
        <div className="header">
          <Logo />
        </div>
      </header>
      <main>
        <div className="loginContainer">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

export default Login;
