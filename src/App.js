
import './App.css';
import Curreny from './components/Currency';
import Home from "./components/Home.js";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/currency" element={<Curreny/>} />
      </Routes>
    </Router>
  );
}

export default App;
