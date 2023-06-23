import { useState,useEffect } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import axios from "axios";
import GaugeChart from 'react-gauge-chart'
  
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
    const [guagePercentage, setGuagePercentage] = useState({
        percentage:0,
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
            setGuagePercentage(.15)
        }
        else if(BMIValue>=16 && BMIValue<=17){
            setClassification({
                bodyClass:"Moderate Thinness"
            })
            setGuagePercentage(.25)
        }
        else if(BMIValue<=18.5){
            setClassification({
                bodyClass:"Mild Thinness"
            })
            setGuagePercentage(.35)
        }
        else if(BMIValue<=25){
            setClassification({
                bodyClass:"Normal"
            })
            setGuagePercentage(.45)
        }
        else if(BMIValue<=30){
            setClassification({
                bodyClass:"Overweight"
            })
            setGuagePercentage(.55)
        }
        else if(BMIValue<=35){
            setClassification({
                bodyClass:"Obese Class I"
            })
            setGuagePercentage(.75)
        }
        else if(BMIValue<=40){
            setClassification({
                bodyClass:"Obese Class II"
            })
            setGuagePercentage(.85)
        }
        else if(BMIValue>40){
            setClassification({
                bodyClass:"Obese Class III"
            })
            setGuagePercentage(.95)
        }
        else{
            setGuagePercentage(1)
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
                                                <h5 className="form-label" > Your Height </h5>
                                                <h6>{!calculateBMI.height? 0 : calculateBMI.height} cm</h6>
                                                <h5 className="form-label" >Your Weight</h5>
                                                <h6 >{!calculateBMI.weight ? 0 : calculateBMI.weight} kg</h6>
                                                <h5 className="form-label" >Your BMI Prime</h5>
                                                <h6>{!afterCalculate.BMIPrime ? 0 : afterCalculate.BMIPrime}</h6>
                                                <h5 className="form-label" >Your Body classification</h5>
                                                <h6>{!classification.bodyClass ? "Yet to calculate" : classification.bodyClass}</h6>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    </div> <br/>
                                    
                                    <div className="Interest-Pie-chart">
                                        <h1>Pie data section</h1><br/>
                                        <GaugeChart id="gauge-chart5"
                                            nrOfLevels={420}
                                            arcsLength={[0.6, 0.3, 0.8]}
                                            colors={['#F5CD19','#5BE12C', '#EA4228']}
                                            cornerRadius={5} 
                                            percent={guagePercentage}
                                            arcPadding={0.01}
                                            needleColor="#345243" 
                                            hideText = {true}
                                            />
                                    </div>
                                
                                </div>
                             }
                       
                            </div>
                        <br/>
                    </div>
                </div>
            </div>         
                

    )
}