import { useState,useEffect } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import axios from "axios";
  
ChartJS.register(ArcElement, Tooltip, Legend);
var apiURL = "https://ft-calc-backend.onrender.com/";

export default function BMICalulator() {
    const [data, setData] = useState({});
    const [calculateBMI, setCalculateBMI] = useState({
        weight:0,
        height:0
    })
    const[afterCalculate,setAfterCalculate] = useState({
        BMI:0,
        BMIPrime:0
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
    const [displayPie, setDisplayPie] = useState({
        value : false,
    })
    const [classification, setClassification] = useState()

    const bodyClassification = (BMIValue) => {
        if(BMIValue<16){
            setClassification({
                bodyClass:"Severe Thinness"
            })
        }
        else if(BMIValue>=16 && BMIValue<=17){
            setClassification({
                bodyClass:"Moderate Thinness"
            })
        }
        else if(BMIValue<=18.5){
            setClassification({
                bodyClass:"Mild Thinness"
            })
        }
        else if(BMIValue<=25){
            setClassification({
                bodyClass:"Normal"
            })
        }
        else if(BMIValue<=30){
            setClassification({
                bodyClass:"Overweight"
            })
        }
        else if(BMIValue<=35){
            setClassification({
                bodyClass:"Obese Class I"
            })
        }
        else if(BMIValue<=40){
            setClassification({
                bodyClass:"Obese Class II"
            })
        }
        else if(BMIValue>40){
            setClassification({
                bodyClass:"Obese Class III"
            })
        }
    }

    const Calculate = () => {
        console.log(calculateBMI);
        let BMICalculate = (calculateBMI.weight/calculateBMI.height / calculateBMI.height) *10000
        console.log(BMICalculate)
        let BMIPrime = BMICalculate/25
        console.log(BMIPrime)
        setAfterCalculate({
            BMI:formatAsPercentage(BMICalculate),
            BMIPrime:formatAsPercentage(BMIPrime)
        })
        setData({
            labels: ['Asset Original Value','Asset Selling Price'],
            datasets: [
            {
                label: "FT Calc",
                data: [data.BMI,data.BMIPrime],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
            }
            ],
        })
        bodyClassification(BMICalculate)
        setDisplayPie(true)
    }

    const Reset = () =>{
        document.location.reload()
    }
    return(
        <div className="body-position-container">
            <div className="Home-page-container col-lg-12">
                <div className="Home-Interest-Section-Container">
                    <div className="Interest-Section-container">
                    
                        <div className="Interest-container">
                            
                            <div className="Interest-container-section1">
                                <h1 id="CI" className="h1">Calculate Your BMI</h1>
                                <label className="form-label">Enter Your Weight &#40; in kg  &#41;</label><br/>
                                <input type="number" pattern="[0-9]" required className="form-control" maxLength={10} id = "totalAmount" name = "weight" value={calculateBMI.weight} onFocus={ (e) => e.target.value = calculateBMI.weight==0? '' : calculateBMI.weight} onChange={handleChange} onBlur ={(e) => e.target.value = calculateBMI.weight} /> <br/>
                                <label className="form-label">Enter Your Height &#40; in cm  &#41;</label><br/>
                                <input type="number" className="form-control" id = "rateOfInterest" maxLength={10} name = "height" value={calculateBMI.height} onFocus={ (e) => e.target.value = calculateBMI.height==0? '' : calculateBMI.height} onBlur ={(e) => e.target.value = calculateBMI.height} onChange={handleChange} /> <br/>
                                <button  onClick={Calculate} className="btn-calc btn btn-primary"> FT Calc Interest </button>
                                <button className="btn btn-danger" onClick={Reset}> Reset </button>
                                
                            </div>
                            <br/>
                            
                            
                        </div>
                        { displayPie.value == false? console.log("not rendered") :
                            <div className="Dynamic-interest-section">
                                <div className="Interest-Result">
                                    <h1>Your BMI Results</h1>
                                    <div className="Interest-Result-Section">
                                        <div className="Interest-Result-Section-left" >
                                            <h2>Your BMI</h2>
                                            <h4>{!afterCalculate.BMI ? 0 : afterCalculate.BMI}</h4> 
                                        </div>
                                        <div className="Interest-Result-Section-right" >
                                            <h2>Overview</h2>
                                            <div className="Interest-Result-Overview">
                                                <h4 className="form-label" > Your Height </h4>
                                                <h4>{!calculateBMI.height? 0 : calculateBMI.height} cm</h4>
                                                <h4 className="form-label" >Your Weight</h4>
                                                <h4 >{!calculateBMI.weight ? 0 : calculateBMI.weight} kg</h4>
                                                <h4 className="form-label" >Your BMI Prime</h4>
                                                <h4>{!afterCalculate.BMIPrime ? 0 : afterCalculate.BMIPrime}</h4>
                                                <h4 className="form-label" >Your Body classification</h4>
                                                <h4>{!classification.bodyClass ? "Yet to calculate" : classification.bodyClass}</h4>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    </div> <br/>
                                    
                                    <div className="Interest-Pie-chart">
                                        <h1>Pie data section</h1>
                                        
                                    </div>
                                
                                </div>
                             }
                       
                            </div>
                        <br/>
                    <label>
                        <b>Note:</b> Perform one calculation at a time and reset the calculation and proceed with next one.
                    </label>
                    </div>
                </div>
            </div>         
                

    )
}