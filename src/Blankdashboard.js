import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Blankdashboard() {
  return (
      <div class = "container">
            <div class = "jumbotron my-5">
                <div class= "container">
                    {/* <div class= "container " ></div> */}
                    <h5>Please <Link to = "/login"><span>Login</span></Link> into your account!</h5>
                    <h5>Or <Link to = "/signup"><span>Sign Up</span></Link> if you don't have one</h5>
                </div>
                
            </div>
      </div>
    
  );
}



export default Blankdashboard;
