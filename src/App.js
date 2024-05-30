import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import {FaCommentDollar, FaHome, FaPaperPlane, FaVideo} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Studio from './components/Studio';
const App = () => {
  return (
    <Router>
      <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-4">
          {/* Menu content goes here */}
          <h1>R Logo</h1>
          <nav>
            <ul className="list-group gap-4 mt-8 border-0">
              <li><NavLink to="/" className="text-xl font-bold"><FaHome /> Home</NavLink></li>
              <li ><NavLink to="/studio" className="text-xl font-bold"><FaVideo /> Vidio Studio</NavLink></li>
              <li ><NavLink to="/agents" className="text-xl font-bold"><FaCommentDollar /> Agents</NavLink></li>
              <li ><NavLink to="/api" className="text-xl font-bold"><FaPaperPlane /> API</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="col-md-8">
              
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
        </div>
        </div>
    </div>  
    </Router>
  );
}

export default App;
