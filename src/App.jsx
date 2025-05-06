import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';


import './App.css'

import Title from './components/Title/Title'
import About from './components/About/About'
import POPOSDetails from './components/POPOSDetails/POPOSDetails'
import POPOSList from './components/POPOSList/POPOSList'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<POPOSList />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<POPOSDetails />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {

  return (
    <Router>
      <Title />
      <div className="App">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
