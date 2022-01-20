import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createUserProfileDocument } from "../../firebase/firebase.helper";

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
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Display Name</label>
          <input
            onChange={handleChange}
            name="displayName"
            type="text"
            label="Display Name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            label="Email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            label="Password"
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
