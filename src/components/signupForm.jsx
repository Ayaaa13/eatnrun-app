import React from "react";

const Label = (props) => {
  return (
    <div>
      <label className="signupLabel" htmlFor={props.htmlFor}>
        {props.htmlFor}:
      </label>
    </div>
  );
};

const Input = (props) => {
  return (
    <div>
      <input className="signupInput" type={props.type} />
    </div>
  );
};

const Policy = () => {
  return (
    <div class="agreementPolicy">
      <input type="checkbox" name="agreement" id="agreement" />

      <label for="agreement">
        <a href="#Agreemment">I agree to all Term, Privacy Policy and Fees</a>
      </label>
    </div>
  );
};

const InputButton = (props) => {
  return (
    <div>
      <input className="signupBtn" type={props.type} value="Signup"></input>
    </div>
  );
};

const Line = () => {
  return (
    <div className="straightLinePosition">
      <div className="straightLine"></div>
      <div className="centerBackground">
        <div className="orSignupWith">Or Signup with</div>
      </div>
    </div>
  );
};

const SocialMediaSignup = () => {
  return (
    <div className="socialMediaSignup">
      <a className="googleSignup" href="#google">
        <img className="googleIcon" src="./socialmedia/googleIcon.png" alt="" />
        Google
      </a>

      <a className="facebookSignup" href="#Facebook">
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
    <div class="signUpButton">
      Already have an account? <a href="/login">Sign In</a>
    </div>
  );
};

const SignupForm = () => {
  return (
    <div className="Signup">
      <div className="getStartedUser">
        <h1>Get Started</h1>
        <p>Create your account now</p>
      </div>
      <form className="SignupForm">
        <Label htmlFor="Username" />
        <Input type="text" id="Username" />
        <Label htmlFor="Password" />
        <Input type="password" id="Password" />
        <Label htmlFor="Confirm Password" />
        <Input type="password" id="ConfirmPassword" />
      </form>
      <Policy />
      <InputButton type="submit" />
      <Line />
      <SocialMediaSignup />
      <SignupBtn />
    </div>
  );
};

export default SignupForm;
