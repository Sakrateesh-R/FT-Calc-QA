
import './App.css';
import Currency from "./components/Currency"
import Home from "./components/Home.js";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProfitLoss from './components/calculations/ProfitLoss';
import Deprecation from './components/calculations/Depreciation';
import Footer from './components/Footer';
import BMICalulator from './components/calculations/BMICalculator';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/currency' element={<Currency/>} />
        <Route path ='/profit/loss' element={<ProfitLoss/>} />
        <Route path='/deprecation' element={<Deprecation/>} />
        <Route path='/bmi' element={<BMICalulator/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
