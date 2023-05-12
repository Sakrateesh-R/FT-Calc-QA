import { useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Deprecation(){

    const [data, setData] = useState({});

    const [depValue, setDepValue] = useState({
        CTA:0,
        SRValue:0,
        LOA:0
    })
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setDepValue({...depValue,[name]:value})
        console.log(depValue)
    }
    const [calculateRender, setCalculateRender] = useState({
        calculateRender:false
    })
    console.log(depValue)
    const [deprecationAmount,setDeprecationAmount] = useState({});
    const [piedata, setPieData] = useState()

    var obj = new Object();

    function Calculate(){
        const loopnum = depValue.LOA;
        var Initial_Amount = depValue.CTA;

        for(let dObject=0; dObject<=loopnum; dObject++){
            console.log("in loop");
        
            console.log("in condition")
            let depAmount = Initial_Amount - 100;
            var swapAmount = depAmount;
            obj = {[dObject]:swapAmount};
            // console.log(obj);
            Initial_Amount = swapAmount;
            setDeprecationAmount({...deprecationAmount,dObject:Initial_Amount});
            setCalculateRender({
                calculateRender: true
            })
            setPieData({
                OriginalAmount:Initial_Amount,
                DeprecationAmount:deprecationAmount.dObject
            })
            console.log("Pie Date" +" "+ piedata)
            setData({labels: ['Asset Rate at buying','Deprecation Value'],
            datasets: [
            {
                label: "FT Calc",
                data: [Initial_Amount,swapAmount],
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
            ],})
            console.log(Initial_Amount)
            
        }
        console.log(deprecationAmount)
        console.log(obj);
    }
    
    function Reset(){
        setDepValue({});
        setCalculateRender({
            calculateRender:false
        })
    }

    return(
        <div className="deprecation-container body-position-container">
            <h1 style={{textAlign:'center'}}>Calculate Deprecation</h1>
            <div className="Depreciation-container-body container">
                <div className="Depreciation-calculate-section">
                    <div className="Depreciation-input-section">
                        <label className="form-label">Cost of the Asset</label><br/>
                        <input type="number" className="form-control" name="CTA" onChange={handleChange}/><br/>
                        <label className="form-label">Salvage/Residual value (in percentage %)</label><br/>
                        <input type="number" className="form-control" name="SRValue" onChange={handleChange}/><br/>
                        {/* <label className="form-label">Method of Depreciation</label><br/>
                        <input type="number" className="form-control"/><br/> */}
                        <label className="form-label">Life of Asset</label><br/>
                        <input type="range" className="form-range" name="LOA" data-bs-toggle="tooltip" data-bs-placement="top" title={`${depValue.LOA} years`} onChange={handleChange} min={0} max={100}/>
                    </div>
                </div>
                <button  onClick={Calculate} className="btn-calc btn btn-primary"> FT Clac Interest </button>
                <button className="btn btn-danger" onClick={Reset}> Reset </button>
            </div>
            {
                deprecationAmount.dObject? 
                <div>
                    <div className="Interest-Result-Section-right" >
                        <h2>Your Deprecation Value</h2>
                        <div className="Interest-Result-Overview">
                            <h4 className="form-label" >Asset Deprecation Amount : </h4>
                            <h4>₹ {!deprecationAmount.dObject? 0 : deprecationAmount.dObject}</h4>
                            <h4 className="form-label" >Asset Original Amount : </h4>
                            <h4 >₹ {!depValue.CTA ? 0 : depValue.CTA}</h4>
                        </div>
                        {/* <div className="Interest-Pie-chart">
                            <h1>Pie data section</h1>
                            <Pie 
                            data={data} 
                            updateMode = "reset"
                            />
                        </div> */}
                    </div>
                    <div className="Interest-Pie-chart">
                    <h1>Pie data section</h1>
                    <Pie 
                    data={data} 
                    updateMode = "reset"
                    />
                    </div>
                </div>
                // <div className="Depreciation-calculation">
                //     <div className="Depreciation-section-value">
                //         <h2></h2>
                //         <div className="Depreciation-calculate-section">
                //             <h3> {}</h3>
                //             <h3> {depValue.CTA}</h3>
                //         </div>
                //         <div className="Interest-Pie-chart">
                //             <h1>Pie data section</h1>
                //             <Pie 
                //             data={data} 
                //             updateMode = "reset"
                //             />
                //         </div>
                //     </div>
                // </div> 
                :
                console.log("not calculated")
            }
            
        </div>
    )
}