import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Expirience from './pages/Expirience';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav container mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education">Education</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/expirience">Expirience</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/expirience" component={Expirience} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <nav className="navbar navbar-expand-lg navbar-dark footer fixed-bottom">
				<div className="container-fluid">
					<ul className="navbar-nav mr-auto container">
						<li className="nav-item"><a href="https://github.com/Creatorbon" target="blank" className="nav-link">Maked by Nikita Remeslov</a></li>
					</ul>
				</div>
			</nav>	
      </div>
    );
  }
}

export default App;
