import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Greetings from './components/Greetings';
import Counter from './components/Counter';
import ToggleMessage from './components/ToggleMessage';
import Userform from './components/UserForm';
import Home from './components/Home';
import About from './components/About';
import Clock from './components/Clock';
import Mihir from './components/Mihir';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        {/* Include the Navbar */}
        
        {/* Define Routes */}
        <ErrorBoundary>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/ToggleMessage" element={<ToggleMessage />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Userform" element={<Userform />} />
          <Route path="/Mihir" element={<Mihir />} />
        </Routes>
        </ErrorBoundary>
        
        {/* Other Components */}
        {/* <Greetings name='Mihir' />
        <Counter />
        <ToggleMessage />
        <Userform /> */}
      </div>
    </Router>
  );
}

export default App;
