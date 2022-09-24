import React from 'react';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './Navbar';
import Todoapp from './Todoapp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutApp from './AboutApp';
import AboutAuthor from './AboutAuthor';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Todoapp} />
          <Route path='/about-app' component={AboutApp} />
          <Route path='/about-author' component={AboutAuthor} />
        </Routes>
        <Todoapp />
      </Router>
    </>
  );
}

export default App;