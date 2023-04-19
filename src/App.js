
import './App.css';
import Curreny from './components/Currency';
import Home from "./components/Home.js";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProfitLoss from './components/calculations/ProfitLoss';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
