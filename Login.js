import "./Login.css";
import "../SignUp/SignUp.js";
import { Link,useNavigate } from "react-router-dom";
import {auth} from "../../Firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const navigate=useNavigate();
  const [values,setValues]=useState({
    Email:"",
    Password:"",
  });
  const [errorMsg,setErrorMsg]=useState("");
  const [SignubmitButtonDisabled,setSubmitButtonDisabled]=useState(false);
  const handleSubmission = () => {
    if(!values.Email){
      setErrorMsg("Please Enter Email!!");
      return;
    }
    else if(!values.Password){
      setErrorMsg("Please Enter Password!!");
      return;
    }
    else if(!values.CPassword){
      setErrorMsg("Please Confirm Your Password!!");
      return;
    }
    else if(values.CPassword!=values.Password){
      setErrorMsg("Please Recheck Your Password!!");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth,values.Email,values.Password).then(async(res)=>{
      setSubmitButtonDisabled(false);
      const user=res.user;
      navigate("/");
      console.log(res);
    }).catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
      console.log("Error-",err)});
  };
  return (
    <>
      <div className="container1">
        <h2 id="tag">Log In</h2>
        <div id="container2">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Email: event.target.value }))
              }
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Password: event.target.value }))
              }
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Confirm Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, CPassword: event.target.value }))
              }
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>
        </div>
        <div>
          <button 
          id="submit" 
          className="btn btn-primary"
          onClick={handleSubmission}
          disabled={SignubmitButtonDisabled}
          >Log In</button>
        </div>
        <div className="container3">
          <h4>Don't have an Account?<Link to="/Signup">SignUp</Link></h4>
        </div>
        <div className="container7">
          <b id="tag1">{errorMsg}</b>
        </div>
      </div>

    </>
  );
}
