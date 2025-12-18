import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import { auth } from "../../Utilty/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      console.log(userInfo);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userInfo);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://logovent.com/blog/wp-content/uploads/2024/05/The-Arrow-Smile-Logo-from-2000-till-Present.jpg"
          alt="Amazon Logo"
        />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign in</h1>

        <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
            />
          </div>

          <button type="submit" className={classes.login_signInButton}>
            Sign in
          </button>
        </form>

        <p>
          By signing in, you agree to the Amazon fake clone Conditions of Use
          and Sale. Please review our Privacy Notice, our Cookies Notice, and
          our Interest Based Ads Notice.
        </p>

        <button
          type="button"
          onClick={handleSignUp}
          className={classes.login_registerionButton}
        >
          Create your Amazon Account
        </button>

        {error && <p className={classes.error}>{error}</p>}
      </div>
    </section>
  );
};

export default Auth;
