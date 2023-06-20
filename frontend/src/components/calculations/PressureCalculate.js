import { useState } from "react";
import GaugeChart from "react-gauge-chart";


export default function PressureCaculate(){

    const [data, setData] = useState({});
    const [calculatePressure, setCalculatePressure] = useState({
        force:0,
        area:0,
        finalPressure:0
    })
    const[afterCalculate,setAfterCalculate] = useState({
        initialPressure:0,
        initialPressurePercentage:0,
        finalPressurePercentage:0,
        pressurePercentage:0

    }) 
    const [guagePercentage, setGuagePercentage] = useState({
        percentage:0,
    })
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setCalculatePressure({...calculatePressure,[name]:value})
        
        console.log(calculatePressure)
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
    const[classification,setClassification] = useState({
        class:'',
    })

    const Calculate = () => {
        console.log(calculatePressure);
        // Calculating initial pressure

        let startingPressure = (calculatePressure.force/calculatePressure.area)

        // Calculating initial pressure percentage
        let initial_pressure_percentage = (startingPressure/1000)*100

        // Calculating Final pressure percentage
        let final_pressure_percentage = (calculatePressure.finalPressure/1000)*100

        let pressure_diff = final_pressure_percentage - startingPressure

        let guagepercentageval = pressure_diff/100

        setAfterCalculate({
            initialPressure:formatAsPercentage(startingPressure),
            initialPressurePercentage:formatAsPercentage(initial_pressure_percentage),
            finalPressurePercentage:formatAsPercentage(final_pressure_percentage),
            pressurePercentage:formatAsPercentage(pressure_diff)
        })

        console.log(afterCalculate)


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
        setGuagePercentage(guagepercentageval)
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
                                <h1 id="CI" className="h1">Calculate Pressure</h1>
                                <label className="form-label">Enter Force &#40; in Kg  &#41;</label><br/>
                                <input type="number" pattern="[0-9]" required className="form-control" maxLength={10} id = "totalAmount" name = "force" value={calculatePressure.force} onFocus={ (e) => e.target.value = calculatePressure.force==0? '' : calculatePressure.force} onChange={handleChange} onBlur ={(e) => e.target.value = calculatePressure.force} /> <br/>
                                <label className="form-label">Enter Area &#40; in m^2  &#41;</label><br/>
                                <input type="number" className="form-control" id = "rateOfInterest" maxLength={10} name = "area" value={calculatePressure.area} onFocus={ (e) => e.target.value = calculatePressure.area==0? '' : calculatePressure.area} onBlur ={(e) => e.target.value = calculatePressure.area} onChange={handleChange} /> <br/>
                                
                                <label className="form-label">Enter Final Pressure &#40; in kg/m^2  &#41;</label><br/>
                                <input type="number" className="form-control" id = "rateOfInterest" maxLength={10} name = "finalPressure" value={calculatePressure.finalPressure} onFocus={ (e) => e.target.value = calculatePressure.finalPressure==0? '' : calculatePressure.finalPressure} onBlur ={(e) => e.target.value = calculatePressure.finalPressure} onChange={handleChange} /> <br/>

                                <button  onClick={Calculate} className="btn-calc btn btn-primary"> FT Calc Interest </button>
                                <button className="btn btn-danger" onClick={Reset}> Reset </button>
                                
                            </div>
                            <br/>
                            
                            
                        </div>
                        { displayPie.value == false? console.log("not rendered") :
                            <div className="Dynamic-interest-section">
                                <div className="Interest-Result">
                                    <h1>Pressure Results</h1>
                                    <div className="Interest-Result-Section">
                                        <div className="Interest-Result-Section-left" >
                                            <h2>Average Pressure</h2>
                                            <h4>{!afterCalculate.pressurePercentage ? 0 : afterCalculate.pressurePercentage}</h4> 
                                        </div>
                                        <div className="Interest-Result-Section-right" >
                                            <h2>Overview</h2>
                                            <div className="Interest-Result-Overview">
                                                <h4 className="form-label" > Initial Pressure </h4>
                                                <h4>{!afterCalculate.initialPressure? 0 : afterCalculate.initialPressure}&#40; Pa &#41;</h4>
                                                <h4 className="form-label" >Final Pressure</h4>
                                                <h4 >{!calculatePressure.finalPressure ? 0 : calculatePressure.finalPressure}  &#40;Pa  &#41;</h4>
                                                <h4 className="form-label" >Area </h4>
                                                <h4>{!calculatePressure.area ? 0 : calculatePressure.area}</h4>
                                                <h4 className="form-label" >Force</h4>
                                                <h4>{!calculatePressure.force ? 0 : calculatePressure.force}</h4>
                                                <h4 className="form-label" >Your Body classification</h4>
                                                <h4>{!classification.class ? "Yet to calculate" : classification.class}</h4>
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