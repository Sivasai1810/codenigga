import React, { useState } from "react";
import "./auth.css";
import Codeniggalogo from "../assets/codeniggalogo.png";
import Rightsideimg from "../assets/rightsideimg.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="left-side-part">
        <header>
          <img src={Codeniggalogo} alt="Logo" width={60} />
          <h2>Welcome Back!</h2>
          <p>Please enter your details</p>
        </header>

        <section>
          <div className="login-inputs">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="condenigga@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p className="forgot-password">Forgot Password?</p>
          </div>

          <div className="login-page-actions-buttons">
            <button className="action-button">Login →</button>

            <p className="terms">
              By creating an account, you agree to our{" "}
              <a href="#">Terms & Services</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </section>

        <div className="page-bottom">
          Don&apos;t have an account?
          <a href="#"> Sign up</a>
        </div>
      </div>
    <div className="right-side-part">
  <div className="right-card">
    <img src={Rightsideimg} alt="Illustration" />
  </div>
</div>

    </div>
  );
}

export default Login;
