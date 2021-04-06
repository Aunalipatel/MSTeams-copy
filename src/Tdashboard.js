import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tdashboard() {
  return (
    <div class = "container py-3">
        <h1 style={textstyle}>Teacher Dashboard!</h1>
        <hr  style={textstyle}></hr>
        <div class = "container">
        <nav class="nav nav-tabs ">
            <a class="nav-link text-light" href="#">Attendance</a>
            <a class="nav-link  text-light" href="#">Assignments</a>
            <a class="nav-link text-light" href="#">My Teams</a>
        </nav>
        <br/>
        
    <br/>
    <div class = "container border border-white rounded p-3" >
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h4 class = "text-light">Upload attendance for: </h4>
                        <form>
                        <div class="form-group">
                            <label style={textstyle} for="exampleFormControlSelect1">Department:</label>
                            <select class="form-control w-50" id="exampleFormControlSelect1">
                            <option>Computers</option>
                            <option>IT</option>
                            <option>EXTC</option>
                            <option>Electronics</option>
                            
                            </select>
                        </div>
                        <div class="form-group">
                            <label style={textstyle} for="exampleFormControlSelect1">Year:</label>
                            <select class="form-control w-50" id="exampleFormControlSelect1">
                            <option>SE</option>
                            <option>TE</option>
                            
                            </select>
                        </div>
                        <div class="form-group">
                            <label style={textstyle} for="exampleFormControlInput1">Date & Time:</label>
                            <input type="email" class="form-control w-50" id="exampleFormControlInput1" placeholder="dd/mm hh:mm"></input>
                        </div>
                        </form>
                    </div>
                    {/* form */}
                    <form>
                        <div class="form-group">
                            <br/><br/><br/><br/><br/><br/>
                            <label style={textstyle} for="exampleFormControlFile1">Excel file</label>
                            <input style={textstyle} type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                        </div>
                        
                    </form>
                    
                    
                </div>
                
            </div>
        </div>
        <br/>
        <div class="container border border-white rounded p-3">
            <h3 class = "text-light"> Assignments:</h3>
            <br/>
            <div class = "container border border-white rounded p-2 m-2 w-25 text-light">
                assignment 1 <br/>
                <small>Computers sem 4</small>
            </div>
            <div class = "container border border-white rounded p-2 m-2 w-25 text-light">
                assignment 2 <br/>
                <small>IT sem 6</small>
            </div>
            <div class = "container  rounded p-2 m-2 w-25 text-light">
                <div className="row">
                    <div className="col container border border-white rounded p-2 m-2 w-50 text-light">Assignment +<br/></div>
                    <div className="col"></div>
                </div>
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
            <div class = "container  rounded p-2 m-2 w-25 text-light">
                <div className="row">
                    <div className="col container border border-white rounded p-2 m-2 w-50 text-light">Team +<br/></div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
        </div>
    </div>
    
  );
}

const textstyle = {color: 'white'};

export default Tdashboard;
