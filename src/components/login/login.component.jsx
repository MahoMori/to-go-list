import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.util";

import {
  CustomCard,
  CustomTextFiled,
  CustomButton,
  CustomBoxLogIn,
} from "../signUp-logIn.style";

const LogIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log("signed in successfully");

      if (userCredential) {
        let from = location.state?.from?.pathname || "/main";
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <CustomCard>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <CustomTextFiled
          variant="standard"
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          required
        />
        <CustomTextFiled
          variant="standard"
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
        <div>
          <CustomButton type="submit" variant="outlined">
            Log In
          </CustomButton>
        </div>
      </form>

      <CustomBoxLogIn>
        <i>
          Please use the following if you want to test logging in. Username will
          be "test".
        </i>
        <p>email: test@test.com</p>
        <p>password: testtest098</p>
      </CustomBoxLogIn>
    </CustomCard>
  );
};

export default LogIn;
