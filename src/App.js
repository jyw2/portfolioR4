import logo from './logo.svg';
import './App.css';
import Main from './main.js'
import { ThemeProvider } from '@mui/material';
import defaultTheme from './DefaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
