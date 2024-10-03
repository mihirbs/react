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
import './App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import ToggleMessage from './components/ToggleMessage';
import LifecycleDemo from './components/LifecycleDemo';
// import Classcomponent from './components/Classcomponent';
// import MyFunctionComponent from './components/Functioncomponent';
function App() {
  return (
    <div className="App">
      <Greetings name="Mihir"/>
      <Counter />
      <ToggleMessage />
      <LifecycleDemo />
      {/* <Classcomponent */}
      {/* <MyFunctionComponent /> */}
    </div>
  );
}
export default App;