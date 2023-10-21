import { Outlet } from "react-router-dom";
import './App.scss'
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
