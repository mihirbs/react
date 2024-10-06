// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import ToggleMessage from './components/ToggleMessage';
import LifecycleDemo from './components/LifecycleDemo';
import Userform from './components/UserForm';
import Home from './components/Home';
import About from './components/About';
// import Classcomponent from './components/Classcomponent';
// import MyFunctionComponent from './components/Functioncomponent';
// function App() {
//   return (
//     <div className="App">
//       <Greetings name="Mihir"/>
//       <Counter />
//       <ToggleMessage />
//       <LifecycleDemo />
//       <Userform />
//       <Home />
//       <About />

//       {/* <Classcomponent */}
//       {/* <MyFunctionComponent /> */}
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Routes>
        <Greetings name='Mihir' />
        <Counter />
        <ToggleMessage />
        <LifecycleDemo  />
        <Userform  />
      </div>
    </Router>
  );
}
export default App;

// project-root/
// │
// ├── public/
// │   ├── index.html
// │   └── favicon.ico
// │
// ├── src/
// │   ├── components/
// │   │   ├── About.js
// │   │   ├── Counter.js
// │   │   ├── Greetings.js
// │   │   ├── Home.js
// │   │   ├── LifecycleDemo.js
// │   │   ├── ToggleMessage.js
// │   │   ├── Userform.js
// │   ├── styles/
// │   │   └── main.css
// │   ├── App.js
// │   ├── App.test.js
// │   ├── App.css
// │   └── index.js
// │
// ├── node_modules/
// │
// ├── package.json
// └── package-lock.json
