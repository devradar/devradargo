import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './NavBar'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div>
        <NavBar />
        <div id="content" style={{ padding: '2em' }}>
          <Outlet />
        </div>
      </div >
    </ThemeProvider>
  );
}

export default App;
