import React, { useState} from "react";
import "./style/Register.css"
import { db } from "../firebase";
import ag from "../pics/ag.jpg";
const Register = () => {

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [role, setRole] = useState("buyer"); // default role is buyer
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("SignUp")
        .add({
          fullname: fullname,
          username: username,
          password: password,
          confirmpassword: confirmpassword,
          role: role,
        })
        
  
      setFullname("");
      setUsername("");
      setPassword("");
      setConfirmpassword("");
    };
  

    return (
      <div className="background-image">
      <img src={ag} alt="ag" />
       <form className="SignUp-form" onSubmit={handleSubmit}>
          

          <h1>Sign Up</h1>
          <div className="main-user-info">
          <div className="user-input-box">
        <label>Full Name</label>
       <input 
       value={fullname}
       placeholder="Enter Full Name"
       onChange={(e) => setFullname(e.target.value)}/></div>

         <div className="user-input-box">
          <label>Username</label>
          <input
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /></div>
    
          <div className="user-input-box">
          <label>Password</label>
          <input
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /></div>

          <div className="user-input-box">

          <label>Confirmpassword</label>
          <input
            placeholder="Confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          /></div><br></br>

          <div>
          <div className="cb-details-box">
              <span className="cb-title">I am .... </span><br></br> <br></br>
            <label>
              <input
                type="radio"
                name="role"
                value="buyer"
                checked={role === "buyer"}
                onChange={(e) => setRole("buyer")}
              />
              Buyer
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="seller"
                checked={role === "seller"}
                onChange={(e) => setRole("seller")}
              />
              Seller
            </label></div>
          </div></div>
    
          <button type="SignUp">
            Submit
          </button>
        </form></div> 
      );
    };
    
export default Register;
