import './App.css';
import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';



import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Login() {

  const [emailfield,setemailfield] = useState('');
  const [email,setemail] = useState('');
  const [passwordfield,setpasswordfield] = useState('');
  const [password,setpassword] = useState('');
  
  const updateemailfield = e => {
    setemailfield(e.target.value)
    // console.log(search)
    
  }
  const updatepasswordfield = e => {
    setpasswordfield(e.target.value)
    // console.log(search)
    
  }

  const submitHandler = e => {
    e.preventDefault();
    setemail(emailfield);
    setemailfield('');
    setpassword(passwordfield);
    setpasswordfield('');
    sendlogininfo(email,password)
    // console.log(search);
    // console.log(this.target.value)
  }


  // useEffect( () => {
  //   console.log("we ran the function that makes the post req")
  //   sendlogininfo(email)
  //   // setquery(' ')
  //   //getrecipes();
  // },[email])

  
  
  function sendlogininfo(login,pass){
    let data = {"emailid" : login , "password":pass}
    if(login != '' && pass != ''){

      console.log("we made a post req for the query")
      console.log(login , pass);
      axios.post('http://lineofcode.pythonanywhere.com/auth/login/',data)
      .then(response => {
        console.log("is a teacher",response.data.user.is_teacher);
        if(!response.data.user.is_teacher){
        window.location.href = "/dashboard";
        }else{
        window.location.href = "/tdashboard";

        }
        // redirectfunc();
        // console.log(response);
        // if(response.)
      })
      .catch(error =>{
        console.log(error);
        alert("Please try again")
      })
    }
    
  }





  return (
    <div>
        <h3></h3>
        <div class="container">
    <div class="row">
      <div class="col">
        
      </div>
      <div class="col-6">
      <div class="jumbotron jumbotron-fluid my-2 rounded py-2">
        <div class="container">
        <h1 class="display-4 ">Log In</h1>
        <small>Don't have an account? <Link to='/signup'><span>Sign Up</span></Link> here!</small>
        <hr class="my-4"></hr>
        <form onSubmit={submitHandler}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onChange={updateemailfield}
            value = {emailfield} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input onChange={updatepasswordfield}
            value = {passwordfield} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
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
}

export default Login;
