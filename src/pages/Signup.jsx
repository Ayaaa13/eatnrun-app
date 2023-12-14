import React from "react";
import Logo from "../components/logo";
import SignupForm from "../components/signupForm";

const Signup = () => {
  return (
    <div className="mainLogin">
      <header>
        <div className="header">
          <Logo />
        </div>
      </header>
      <main>
        <div className="loginContainer">
          <SignupForm />
        </div>
      </main>
    </div>
  );
};

export default Signup;
