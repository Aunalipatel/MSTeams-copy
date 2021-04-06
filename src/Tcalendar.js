import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';



import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Tcalendar() {
  return (
    <div>
    <div class = "container py-0 my-0"> 
    <br/>
        <h2 style = {textstyle}>March 2st 2021</h2>
        <hr/>
        <h4 style = {textstyle}>Your lectures for the day:</h4>
    </div>
    

    <div class = "container py-2 my-2 px-1">
      <div class="row">
      <div class="col">
      <div class = "container border border-white rounded px-2 py-2 mx-2 mt-2 text-light">
        <h6>Maths Tutorial</h6>
        <div class = "row my-1 py-1">
          <div className="col"><p>SE Computers</p></div>
          <div className="col"><p>9:30-10:30  </p></div>
        </div>
        <button type="button" class="btn btn-light btn-sm mr-4">Add Link+</button>
        <button type="button" class="btn btn-light btn-sm">Join</button>
      </div>
      
      <div class = "container border border-white rounded px-2 py-2 mx-2 mt-4 text-light">
        <h6>Chemistry Tutorial</h6>
        <div class = "row my-1 py-1">
          <div className="col"><p>TE IT</p></div>
          <div className="col"><p>11:30-1:30  </p></div>
        </div>
        <button type="button" class="btn btn-light btn-sm mr-4">Add Link+</button>
        <button type="button" class="btn btn-light btn-sm">Join</button>
      </div>
      </div>
      <div class="col">
        {/* blank */}
      </div>
      <div class="col">
        {/* blank */}
      </div>
    
    </div>
    </div>
    </div>
    
  );
}
const textstyle = {
  color:'white'
};
export default Tcalendar;
