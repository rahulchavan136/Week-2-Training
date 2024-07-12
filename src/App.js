import React from 'react';
import './App.css';
import Counter from './components/Counter';
import { CardGreen, CardRed } from './components/CardComponent';

const NewCardRed = Counter(CardRed);
const NewCardGreen = Counter(CardGreen);

const App = () => {
  return (
    <div className='text-center mt-5'>
      <NewCardRed /><br />
      <NewCardGreen />
    </div>
  );
};

export default App;



// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { MyuseCallback } from './hooks/MyuseCallback';
// // import ParentComponent from './contextapi/ParentComponent';
// // import ParentComponent from './hooks/ParentComponent';
// // import TimeDisplay from './hooks/TimeDisplay';
// // import PureComponent from './components/MyPureComponent';
// // import MyMemoComponent from './FunctionalComponent/MyMemoComponent';
// // import Counter1 from './components/Counter1';
// // import Counter2 from './components/Counter2';
// import { LoginProvider } from './contextapi/LoginContext';
// import Login from './contextapi/Login';
// import Home from './pages/Home';
// import Parent from './contextapi/Parent';
// import Counter from './components/Counter';

// function App() {
//   return (
//     <>
//       <div className="App">
//         {/* <Home />  */}
//         {/* <MyuseCallback />  */}
//         {/* <ParentComponent /> */}
//         {/* <TimeDisplay /> */}
//         {/* <ParentComponent /> */}
//         {/* <LoginProvider>
//           <Login />
//         </LoginProvider> */}
//         {/* <Parent /> */}
//         <Counter />
//       </div>
//     </>
//   );
// }

// export default App;


