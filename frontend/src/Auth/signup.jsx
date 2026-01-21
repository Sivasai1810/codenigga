import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import Codeniggalogo from "../assets/codeniggalogo.png";
import Rightsideimg from "../assets/rightsideimg.png";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName,setUserName]=useState("")
  const [message,setMessage]=useState("")
const handlesignup=async()=>{
try{
const res=await axios.post("http://localhost:3000/auth/signup",{
  userName,
  userEmail:email,
  password:password
},{
  withCredentials:true
})
setMessage(res.data.message)
if(res.data.success===true){
  alert("signup successfully completed")
  console.log("login completed sucessfully")
}else{
  alert(res.data.message)
  console.log(res.data.message)
}
}catch(err){
  
  console.log("Login Error at login.jsx",err)
}
}
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
            <label htmlFor="username"> Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e)=>{setUserName(e.target.value)}}
            >
            </input>
            </div>
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

            {/* <p className="forgot-password">Forgot Password?</p> */}
          </div>

          <div className="login-page-actions-buttons">
            <button className="action-button" onClick={handlesignup}>Signup →</button>

            <p className="terms">
              By creating an account, you agree to our{" "}
              <a href="#">Terms & Services</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </section>

        <div className="page-bottom">
          Already have an account ?
          <a href="#"> Login</a>
        </div>
      </div>
      {/* <div className="googlelogin">
<button onClick={handleGooglelogin}>
ContinueWithGoogle
</button>
      </div> */}
    <div className="right-side-part">
  <div className="right-card">
    <img src={Rightsideimg} alt="Illustration" />
  </div>
</div>

    </div>
  );
}

export default Signup;

