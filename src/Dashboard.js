import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';

function Dashboard() {
  return (
  <div>

  
      <div>
        {/* <Navbar /> */}
      </div>
    <div class = "container py-3">
        <h1 style={textstyle}>Student Dashboard!</h1>
        <hr  style={textstyle}></hr>
        <div class = "container">
        <nav class="nav nav-tabs ">
            <a class="nav-link text-light" href="#">Attendance</a>
            <a class="nav-link  text-light" href="#">Assignments</a>
            <a class="nav-link text-light" href="#">My Teams</a>
        </nav>
        <br/>
        <div class = "container border border-white rounded p-3" >
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h4 class = "text-light">Your attendance is: <br/><span class="display-4" >65%</span></h4>
                    </div>
                    <div class="col">
                    <h5 class = "text-light">This Semester</h5>
                    <div className="container my-3 mx-0 px-0">
                        <h6 class = "text-light">Lectures Attended: <span>7</span></h6>
                        <h6 class = "text-light">Lectures missed: <span>3</span></h6>
                    </div>
                    
                    </div>
                </div>
                
            </div>
        </div>
    <br/>
        <div class="container border border-white rounded p-3">
            <h3 class = "text-light"> Assignments:</h3>
            <br/>
            <div class = "container border border-white rounded p-2 m-2 w-25 text-light">
                <p>assignment 1  </p>
                <div class = "row ">
                    <div class = "col">
                        <small>subscript</small>
                    </div>
                    <div class = "col d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-light">^</button>        
                    </div>
                </div>
            </div>
            <div class = "container border border-white rounded p-2 m-2 w-25 text-light">
                assignment 2<br/>
                <button type="button" class="btn btn-outline-light">^</button>
            </div>
        </div>
        <br/>
        <div class="container border border-white rounded p-3">
            <h3 class = "text-light"> My Teams</h3>
            <br/>
            <div class = "container border border-white rounded p-2 m-2 w-25 text-light">
                Maths 3<br/>
                <small>Prof. Aunali </small>
            </div>
            <div class = "container border border-white rounded p-2 m-2 w-25 text-light">
                Computer Networks<br/>
                <small>Prof. Devanshu</small>
            </div>
            <div class = "container border border-white rounded p-2 m-2 w-25 text-light">
                Finite automata<br/>
                <small>Prof. Dhruvi</small>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}

const textstyle = {color: 'white'};

export default Dashboard;
