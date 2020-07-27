// import React from 'react';
// import './App.css';
// // import Task from './components/Task';
// import Button from './components/Button';
// import Header from './components/Header';


// function App() {
//   return (
//     <div className="App">
//       {/* <Task/> */}
//       <Header>My App</Header>

//       <Button>Hello, Storybook!</Button>

//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/Task/InboxScreen';

import './index.css';
function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
export default App;
