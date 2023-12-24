import { useState } from "react";
import "./SignUp.css";
import { Link,useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../../Firebase";
export default function SignUp() {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Password: "",
    CPassword: "",
  });
  const [errorMsg,setErrorMsg]=useState("");
  const [SignubmitButtonDisabled,setSubmitButtonDisabled]=useState(false);
  const handleSubmission = () => {
    if(!values.Name)  {
      setErrorMsg("Please Enter Name!!");
      return;
    }
    else if(!values.Email){
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
    createUserWithEmailAndPassword(auth,values.Email,values.Password).then(async(res)=>{
      setSubmitButtonDisabled(false);
      const user=res.user;
      await updateProfile(user,{
        displayName:values.Name,
      })
      navigate("/");
      console.log(res);
    }).catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
      console.log("Error-",err)});
  };

  return (
    <>
      <div className="container4">
        <h2 id="tag">Sign Up</h2>
        <div id="container5">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Name: event.target.value }))
              }
            />
            <label htmlFor="floatingPassword">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Email: event.target.value }))
              }
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Password: event.target.value }))
              }
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Confirm Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, CPassword: event.target.value }))
              }
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>
        </div>
        <div>
          <button
            onClick={handleSubmission}
            id="submit"
            className="btn btn-primary"
            disabled={SignubmitButtonDisabled}
          >
            Sign Up
          </button>
        </div>
        <div className="container6">
          <h4>
            Already have an Account?{' '}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </h4>
        </div>
        <div className="container7">
          <b id="tag1">{errorMsg}</b>
        </div>
      </div>
    </>
  );
}
