import { Outlet } from "react-router-dom";
import './App.scss'
import NavBar from './NavBar'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
