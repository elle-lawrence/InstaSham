import React from 'react';
import { AppNavbar } from '../components/instasham-design-system';
import './App.scss';
import Routes from '../routes';

function App() {
  return (
    <>
      <AppNavbar userInfo={{ username: 'asd' }} />
      <div className="app-container">
        <Routes />
      </div>
    </>
  );
}

export default App;
