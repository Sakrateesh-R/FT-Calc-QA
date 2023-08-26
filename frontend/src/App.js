
import './App.css';
import Currency from "./components/Currency"
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProfitLoss from './components/calculations/Finance/ProfitLoss';
import Deprecation from './components/calculations/Finance/Depreciation';
import Footer from './components/Footer';
import BMICalulator from './components/calculations/Biology/BMICalculator';
import Interest from './components/calculations/Finance/Interest';
import Home from './static_page/Home';
import BudgetCalculator from './components/HouseCalculation/BugetCalculator';
import PressureCaculate from './components/calculations/Construction/PressureCalculate';
import Addition from './components/calculations/Maths/Addition';
import FinanceMain from './components/calculations/Finance/FinanceMain';
import BiologyMain from './components/calculations/Biology/BiologyMain';
import ConstructionMain from './components/calculations/Construction/ConstructionMain';
import PhysicsMain from './components/calculations/Physics/PhysicsMain';
import Speed from './components/calculations/Physics/Speed';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/finance' element={<FinanceMain/>}/>
        <Route path='/biology' element={<BiologyMain/>}/>
        <Route path='/physics' element={<PhysicsMain/>}/>
        <Route path='/construction' element={<ConstructionMain/>}/>
        <Route path='/interest' element={<Interest/>}/>
        <Route path='/currency' element={<Currency/>} />
        <Route path ='/profit/loss' element={<ProfitLoss/>} />
        <Route path='/deprecation' element={<Deprecation/>} />
        <Route path='/bmi' element={<BMICalulator/>} />
        <Route path='/budget' element={<BudgetCalculator/>} />
        <Route path='/pressure' element={<PressureCaculate/>}/>
        <Route path='/addition' element={<Addition/>}/>
        <Route path='/speed' element={<Speed/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
