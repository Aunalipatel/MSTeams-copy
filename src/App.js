import './App.css';
import React from 'react';
import Dashboard from './Dashboard';
import Tdashboard from './Tdashboard';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Calendar from './Calendar';
import Tcalendar from './Tcalendar';
import Blankdashboard from './Blankdashboard';
import Assignment from './Assignment';



import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    </div>
    <Switch>
        <Route path = "/" exact component = {Blankdashboard}/>;
        <Route path = "/calendar" exact component = {Calendar}/>;
        <Route path = "/tcalendar" exact component = {Tcalendar}/>;
        <Route path = "/login" component = {Login}/>;
        <Route path = "/signup" component = {Signup}/>;
        <Route path = "/tdashboard" component = {Tdashboard}/>;
        <Route path = "/dashboard" component = {Dashboard}/>;
        <Route path = "/assignment" component = {Assignment}/>;
      </Switch>
    </Router>
  );
}

const Home = () => {
  <div>
    <h1>homepage</h1>
  </div>
}
export default App;
