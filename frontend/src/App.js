
import './App.css';
import Currency from "./components/Currency"
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProfitLoss from './components/calculations/ProfitLoss';
import Deprecation from './components/calculations/Depreciation';
import Footer from './components/Footer';
import BMICalulator from './components/calculations/BMICalculator';
import Interest from './components/Interest';
import Home from './static_page/Home';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/interest' element={<Interest/>}/>
        <Route path='/currency' element={<Currency/>} />
        <Route path ='/profit/loss' element={<ProfitLoss/>} />
        <Route path='/deprecation' element={<Deprecation/>} />
        <Route path='/bmi' element={<BMICalulator/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
