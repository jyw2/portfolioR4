import '../styles/App.css';
import Main from './Main.js'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const main = <Main style={{ height: "100%", width: "100%", backgroundColor: "black" }} />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:category" element={main} />
        <Route path="/" element={main} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
