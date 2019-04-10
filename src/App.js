import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Budget_planner from "./components/budget_planner_component";
import Travelling from "./components/travelling_information_componet";
import HotelReserve from "./components/hotel_reservation_component";
import Home from "./components/home_component";


import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Home</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/travelling" className="nav-link">Travelling</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create/budget" className="nav-link">Create your budget</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/hotels" className="nav-link">Hotel Reservation</Link>
              </li>
                 <div>
                     <button className="btn btn-outline-success my-2 my-sm-0" style={{marginLeft:350}}type="submit">Sign In</button>
                 </div>
                  <div>
                      <button className="btn btn-outline-success my-2 my-sm-0" style={{marginLeft:20}} type="submit">Sign Up</button>
                  </div>

              </ul>

            </div>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/hotels" exact component={HotelReserve} />
          <Route path="/travelling" component={Travelling} />
          <Route path="/create/budget" component={Budget_planner} />
        </div>
      </Router>
    );
  }
}

export default App;
