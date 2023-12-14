import React from "react";

const Label = (props) => {
  return (
    <div>
      <label className="loginLabel" htmlFor={props.htmlFor}>
        {props.htmlFor}:
      </label>
    </div>
  );
};

const Input = (props) => {
  return (
    <div>
      <input className="loginInput" type={props.type} />
    </div>
  );
};

const InputButton = (props) => {
  return (
    <div>
      <input className="loginBtn" type={props.type} value="Login"></input>
    </div>
  );
};

const Remember = (props) => {
  return (
    <div className="remember">
      <input type={props.type} /> Remember Me
    </div>
  );
};

const ForgotPass = () => {
  return (
    <div className="forgotPass">
      <a href="/forgotPassword">Forgot Password?</a>
    </div>
  );
};

const RememberAndForgot = () => {
  return (
    <div className="rememberForgot">
      <Remember type="checkbox" />
      <ForgotPass />
    </div>
  );
};

const Line = () => {
  return (
    <div className="straightLinePosition">
      <div className="straightLine"></div>
      <div className="centerBackground">
        <div className="orLoginWith">Or login with</div>
      </div>
    </div>
  );
};

const SocialMediaLogin = () => {
  return (
    <div className="socialMediaLogin">
      <a className="googleLogin" href="#google">
        <img className="googleIcon" src="./socialmedia/googleIcon.png" alt="" />
        Google
      </a>

      <a className="facebookLogin" href="#Facebook">
        <img
          className="facebookIcon"
          src="./socialMedia/facebookIcon.png"
          alt=""
        />
        Facebook
      </a>
    </div>
  );
};

const SignupBtn = () => {
  return (
    <div className="signUpButton">
      Don’t have an account? <a href="/signup">Sign Up</a>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div className="login">
      <div className="welcomeLogin">
        <h1>Welcome Back</h1>
        <p>Please enter your details.</p>
      </div>
      <form className="loginForm">
        <Label htmlFor="Username" />
        <Input type="text" id="Username" />
        <Label htmlFor="Password" />
        <Input type="text" id="Password" />
      </form>
      <RememberAndForgot />
      <InputButton type="submit" />
      <Line />
      <SocialMediaLogin />
      <SignupBtn />
    </div>
  );
};

export default LoginForm;
