import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Signup() {
  return (
    <div>
        <h3></h3>
        
    <div>
        <h3></h3>
        <div class="container">
    <div class="row">
      <div class="col">
        
      </div>
      <div class="col-6">
      <div class="jumbotron jumbotron-fluid my-4 rounded py-2">
        <div class="container">
        <h1 class="display-4 ">Sign Up</h1>
        <small>Already have an account? <Link to='/login'><span>Login</span></Link> here!</small>
        <hr class="my-4 "></hr>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Unique ID (SAP ID)</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ID"></input>
            <small id="emailHelp" class="form-text text-muted">Your ID card number</small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Full Name:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Firstname Lastname"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
</div>
      </div>
      <div class="col">
        
      </div>
    </div>
    
</div>
    </div>
  );
    </div>
  );
}

export default Signup;
