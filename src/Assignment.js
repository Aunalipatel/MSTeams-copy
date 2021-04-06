import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Assignment() {
  return (
    <div class = "container py-3">
        <h1 style={textstyle}>Assignment 1</h1>
        <hr  style={textstyle}></hr>
        <div class = "container">
        
        <br/>
        <div class = "container border border-white rounded p-3" >
            <div class="container">
                <h4 style={textstyle}>Description:</h4>
                <p style={textstyle}>lolzipu</p>
                <hr/>
                <h6 style={textstyle}>Deadline:</h6>
                <p style={textstyle}>26th March 11:59pm</p>
                <form>
                <div class="form-group">
                    <label style={textstyle} for="exampleFormControlFile1">Upload PDF file</label>
                    <input style={textstyle} type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                </div>
                
            </form>
            </div>
            
        </div>
    <br/>
        
    </div>
    </div>
    
  );
}

const textstyle = {color: 'white'};

export default Assignment;
