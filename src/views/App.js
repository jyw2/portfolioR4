import logo from '../logo.svg';
import '../styles/App.css';
import Main from './Main.js'
import { ThemeProvider } from '@mui/material';
import defaultTheme from '../styles/DefaultTheme.js';

function App() {
  return (
    <Main style={{ height: "20px", width: "100%", backgroundColor: "black" }} />

  );
}

export default App;
