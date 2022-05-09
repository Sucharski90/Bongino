//import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NewsletterLayout from "./Components/NewsletterLayout";
import AudioPlayer from "./Components/AudioPlayer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <AudioPlayer />
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/newsletters' element={<NewsletterLayout />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
