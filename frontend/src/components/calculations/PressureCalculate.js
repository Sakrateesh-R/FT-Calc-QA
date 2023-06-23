import { useState } from "react";
import GaugeChart from "react-gauge-chart";


export default function PressureCaculate(){

    const [data, setData] = useState({});
    const [calculatePressure, setCalculatePressure] = useState({
        stress:0,
        thickness:0,
        diameter:0
    })
    const[afterCalculate,setAfterCalculate] = useState({
       averagePressure:0,
       pressure:0

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

    const pressureClassification = (pressure) => {
        if(pressure<16){
            setGuagePercentage(.15)
        }
        else if(pressure>=20 && pressure<=17){
           
            setGuagePercentage(.25)
        }
        else if(pressure<=40){
            
            setGuagePercentage(.35)
        }
        else if(pressure<=50){
            
            setGuagePercentage(.45)
        }
        else if(pressure<70){
           
            setGuagePercentage(.55)
        }
        else if(pressure<80){
            
            setGuagePercentage(.75)
        }
        else if(pressure<90){
            
            setGuagePercentage(.85)
        }
        else if(pressure<100){
            
            setGuagePercentage(.95)
        }
        else{
            setGuagePercentage(1)
        }
    }

    const Calculate = () => {
        console.log(calculatePressure);
        const pressure = (2*calculatePressure.thickness*calculatePressure.stress) / calculatePressure.diameter // P= (2*T*S/D)

        const averagePressure = pressure/100

        console.log(pressure)
        console.log(averagePressure)


        setAfterCalculate({
            averagePressure:formatAsPercentage(averagePressure),
            pressure:formatAsPercentage(pressure)
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
        pressureClassification(averagePressure)
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
                                <h1 id="CI" className="h1">Calculate Pipe Pressure</h1><br/>
                                <label className="form-label">Enter allowable stress &#40; Pa &#41;</label><br/>
                                <input type="number" pattern="[0-9]" required className="form-control" maxLength={10} id = "totalAmount" name = "stress" value={calculatePressure.stress} onFocus={ (e) => e.target.value = calculatePressure.stress==0? '' : calculatePressure.stress} onChange={handleChange} onBlur ={(e) => e.target.value = calculatePressure.stress} /> <br/>
                    
                                <label className="form-label">Enter wall thickness &#40; mm &#41; </label><br/>
                                <input type="number" className="form-control" id = "rateOfInterest" maxLength={10} name = "thickness" value={calculatePressure.thickness} onFocus={ (e) => e.target.value = calculatePressure.thickness==0? '' : calculatePressure.thickness} onBlur ={(e) => e.target.value = calculatePressure.thickness} onChange={handleChange} /> <br/>

                                <label className="form-label">Enter outer diameter &#40; m &#41; </label><br/>
                                <input type="number" className="form-control" id = "rateOfInterest" maxLength={10} name = "diameter" value={calculatePressure.diameter} onFocus={ (e) => e.target.value = calculatePressure.diameter==0? '' : calculatePressure.diameter} onBlur ={(e) => e.target.value = calculatePressure.diameter} onChange={handleChange} /> <br/>

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
                                            <h4>{!afterCalculate.averagePressure ? 0 : afterCalculate.averagePressure}</h4> 
                                        </div>
                                        <div className="Interest-Result-Section-right" >
                                            <h2>Overview</h2>
                                            <div className="Interest-Result-Overview">
                                                <h4 className="form-label" > Pressure</h4>
                                                <h4>{!afterCalculate.pressure? 0 : afterCalculate.pressure}&#40; Pa &#41;</h4>
                                                <h4 className="form-label" >Allowable Pressure</h4>
                                                <h4 >{!calculatePressure.stress ? 0 : calculatePressure.stress}  &#40;Pa  &#41;</h4>
                                                <h4 className="form-label" >Wall Thickness</h4>
                                                <h4>{!calculatePressure.thickness? 0 : calculatePressure.thickness}&#40; mm &#41;</h4>
                                                <h4 className="form-label" >Outside Diameter</h4>
                                                <h4>{!calculatePressure.diameter? 0 : calculatePressure.diameter}&#40; m &#41;</h4>
                                                <h4 className="form-label" >Pressure classification</h4>
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