import { useState,useEffect } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";
  
ChartJS.register(ArcElement, Tooltip, Legend);
var apiURL = "https://ft-calc-backend.onrender.com/";

export default function BMICalulator(){
    const [data, setData] = useState({});
    const [calculateBMI, setCalculateBMI] = useState({
        weight:0,
        height:0
    }) 
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setCalculateBMI({...calculateBMI,[name]:value})
        
        console.log(calculateBMI)
    }
    function formatAsPercentage(num) {
        return new Intl.NumberFormat('default', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(num);
    }
    const Calculate = () => {

    }

    const Reset = () =>{

    }
    return(
        <div className="body-position-container">
            <div className="Home-page-container col-lg-12">
                <div className="Home-Interest-Section-Container">
                    <div className="Interest-Section-container">
                    
                        <div className="Interest-container">
                            
                            <div className="Interest-container-section1">
                                <h1 id="CI" className="h1">Calculate Your BMI</h1>
                                <label className="form-label">Enter Your Weight</label><br/>
                                <input type="number" pattern="[0-9]" className="form-control" maxLength={10} id = "totalAmount" name = "weight" value={calculateBMI.weight} onFocus={ (e) => e.target.value = calculateBMI.weight==0? '' : calculateBMI.weight} onChange={handleChange} onBlur ={(e) => e.target.value = calculateBMI.weight} /> <br/>
                                <label className="form-label">Enter Your Height</label><br/>
                                <input type="number" className="form-control" id = "rateOfInterest" maxLength={10} name = "height" value={calculateBMI.height} onFocus={ (e) => e.target.value = calculateBMI.height==0? '' : calculateBMI.height} onBlur ={(e) => e.target.value = calculateBMI.height} onChange={handleChange} /> <br/>
                                <button  onClick={Calculate} className="btn-calc btn btn-primary"> FT Clac Interest </button>
                                <button className="btn btn-danger" onClick={Reset}> Reset </button>
                                
                            </div>
                            <br/>
                            
                            
                        </div>
                    </div>
                </div>
            </div>         
        </div>        

    )
}