import React, { useState } from "react";
// import { useLocation, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.util";

const LogIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  //   const navigate = useNavigate()
  //   const location = useLocation()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //   const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password)
      await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log("signed in successfully");

      //   if(userCredential){
      //     let from = location.state?.from?.pathname || '/'
      //     navigate(from, { replace: true })
      //   }
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
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input name="email" type="email" onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
