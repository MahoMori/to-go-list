import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.util";

import {
  CustomCard,
  CustomTextFiled,
  CustomButton,
} from "../signUp-logIn.style";

const SignUp = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const auth = getAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // handle with firebase
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      const docRef = await addDoc(collection(db, "users"), {
        displayName: user.displayName,
      });

      setUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Signed up successfully!");
    } catch (error) {
      console.log(error);
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <CustomTextFiled
            label="Display Name"
            variant="standard"
            onChange={handleChange}
            name="displayName"
            type="text"
            value={user.displayName}
            required
          />
          <CustomTextFiled
            label="Email"
            variant="standard"
            onChange={handleChange}
            name="email"
            type="email"
            value={user.email}
            required
          />
          <CustomTextFiled
            label="Password"
            variant="standard"
            onChange={handleChange}
            name="password"
            type="password"
            value={user.password}
            required
          />
          <CustomTextFiled
            label="Confirm Password"
            variant="standard"
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            value={user.confirmPassword}
            required
          />
        </div>

        <CustomButton type="submit" variant="outlined">
          Sign Up
        </CustomButton>
      </form>
    </CustomCard>
  );
};

export default SignUp;
