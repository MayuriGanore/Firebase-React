import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
function Home(props) {
  return (
    <div className='container8'>
        <div>
      <h2>
        <button className='btn btn-primary'>
        <Link id="link" to="/login">Login</Link>
        </button>
      </h2>
      <h2>
        <button className='btn btn-primary'>
        <Link id="link" to="/signup">SignUp</Link>
        </button>
      </h2>
      </div>
      
      <h2>{props.Name ?`Welcome - ${props.Name} !!`:"Login Please"}</h2>
    </div>
  );
}

export default Home;
