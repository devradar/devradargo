import { Outlet } from "react-router-dom";
import './App.scss'
import NavBar from './NavBar'
import React from "react";

function App() {
  return (
    <div>
      <NavBar />
      <div id="content" style={{ padding: '2em' }}>
        <Outlet />
      </div>
    </div >
  );
}

export default App;
