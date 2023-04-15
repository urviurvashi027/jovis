import React from 'react';
import logo from './logo.svg';
import SignIn from './page/signin/signin.tsx';
import Dashboard from './page/dashboard/dashboard.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
       <SignIn/>
       {/* <Dashboard /> */}
    </div>
  );
}

export default App;
