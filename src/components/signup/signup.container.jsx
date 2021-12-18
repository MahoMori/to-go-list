import React from "react";
import { auth } from "../../firebase/firebase";

const SignupContainer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    auth.createUserWithEmailAndPassword(email.value, password.value);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email address</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignupContainer;
