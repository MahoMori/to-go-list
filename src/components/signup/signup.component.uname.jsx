import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createUserProfileDocument } from "../../firebase/firebase.createUserProfile";

const SignUp = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const auth = getAuth();

  const handleSubmit = async (event) => {
    // const handleSubmit = (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    // handle with firebase
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      setUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
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
    <form onSubmit={handleSubmit}>
      <input
        // onChange={handleChange}
        handleChange={handleChange}
        name="displayName"
        type="text"
        label="Display Name"
        // value={user.displayName || ""}
        required
      />
      <input
        handleChange={handleChange}
        name="email"
        type="email"
        label="Email"
        // value={user.email || ""}
        required
      />
      <input
        handleChange={handleChange}
        name="password"
        type="password"
        label="Password"
        // value={user.password || ""}
        required
      />
      <input
        handleChange={handleChange}
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        // value={user.confirmPassword || ""}
        required
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
