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
    //const [deprecationAmount,setDeprecationAmount] = useState({});
    const [piedata, setPieData] = useState({
        OriginalAmount:0,
        DeprecationAmount:0
    })

    //var obj = new Object();

    function Calculate(){
        const loopnum = depValue.LOA;
        var Initial_Amount = depValue.CTA;
        var deprecation =  Initial_Amount * Math.pow((1 - depValue.SRValue / 100), depValue.LOA)
        console.log(deprecation)
        setCalculateRender({
            calculateRender: true
        })
        setPieData({
            OriginalAmount:Initial_Amount,
            DeprecationAmount:deprecation
        })
        const chartData = {labels: ['Asset Rate at buying','Deprecation Value'],
            datasets: [
            {
                label: "FT Calc",
                data: [Initial_Amount,deprecation],
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
            ],}
            setData(chartData)

        // for(let dObject=0; dObject<=loopnum; dObject++){
        //     console.log("in loop");
        
        //     console.log("in condition")
        //     let depAmount = Initial_Amount - 100;
        //     var swapAmount = depAmount;
        //     obj = {[dObject]:swapAmount};
        //     // console.log(obj);
        //     Initial_Amount = swapAmount;
        //     setDeprecationAmount({...deprecationAmount,dObject:Initial_Amount});
        //     setCalculateRender({
        //         calculateRender: true
        //     })
        //     setPieData({
        //         OriginalAmount:Initial_Amount,
        //         DeprecationAmount:deprecationAmount.dObject
        //     })
        //     console.log("Pie Date" +" "+ piedata)
        //     setData({labels: ['Asset Rate at buying','Deprecation Value'],
        //     datasets: [
        //     {
        //         label: "FT Calc",
        //         data: [Initial_Amount,swapAmount],
        //         backgroundColor: [
        //         'rgba(255, 99, 132, 0.2)',
        //         'rgba(54, 162, 235, 0.2)',
        //         ],
        //         borderColor: [
        //         'rgba(255, 99, 132, 1)',
        //         'rgba(54, 162, 235, 1)'
        //         ],
        //         borderWidth: 1,
        //     }
        //     ],})
        //     console.log(Initial_Amount)
            
        // }
        console.log(piedata.DeprecationAmount)
        // console.log(obj);
    }
    
    function Reset() {
        if(depValue.CTA){
            setDepValue({})
            
        }
        setCalculateRender({calculateRender:false})
        //setDisplayPie({value:false})
       
    }

    return(
        <div className="body-position-container">
            <div className="Home-page-container col-lg-12">
                <div className="Home-Interest-Section-Container">
                    <div className="Interest-Section-container">
                    
                        <div className="Interest-container">
                            
                            <div className="Interest-container-section1">
                                <h1 id="CI" className="h1">Calculate Interest</h1>
                                <label className="form-label"> Assest Original Value</label><br/>
                                <input type="number" pattern="[0-9]" className="form-control" id = "totalAmount" name = "CTA" value={depValue.CTA} onFocus={ (e) => e.target.value=''} onChange={handleChange} onBlur ={(e) => e.target.value = depValue.CTA} /> <br/>
                                <label className="form-label">Deprecation Percentage Per Year</label><br/>
                                <input type="number" className="form-control" id = "rateOfInterest" name = "LOA" value={depValue.LOA} onFocus={ (e) => e.target.value=''} onBlur ={(e) => e.target.value = depValue.LOA} onChange={handleChange} /> <br/>
                                <label className="form-label">Assest Useful Years</label><br/>
                                <input type="number" className="form-control" id = "noOfYear" name = "SRValue" value={depValue.SRValue} onFocus={ (e) => e.target.value=''} onBlur ={(e) => e.target.value = depValue.SRValue} onChange={handleChange} /> <br/><br/>
                                <button  onClick={Calculate} className="btn-calc btn btn-primary"> FT Clac Interest </button>
                                <button className="btn btn-danger" onClick={Reset}> Reset </button>
                                
                            </div>
                            <br/>
                            
                            
                        </div> 
                        { !calculateRender.calculateRender? console.log("not rendered") :
                        <div className="Dynamic-interest-section">
                            <div className="Interest-Result">
                                <h1>Your Loan Estimate</h1>
                                <div className="Interest-Result-Section">
                                    <div className="Interest-Result-Section-left" >
                                        <h2>Assest Value after Depreciation </h2>
                                        <h4>₹{piedata.DeprecationAmount ? 0 :piedata.DeprecationAmount}</h4> 
                                    </div>
                                    <div className="Interest-Result-Section-right" >
                                        <h2>Overview</h2>
                                        <div className="Interest-Result-Overview">
                                            <h4 className="form-label" >Asset Buying Price </h4>
                                            <h4>₹ {!depValue.CTA? 0 : depValue.CTA }</h4>
                                            <h4 className="form-label" >Depreciation rate per year</h4>
                                            <h4 >₹ {!depValue.LOA ? 0 : depValue.LOA}</h4>
                                            <h4 className="form-label" >Deprecation rate per year  </h4>
                                            <h4>₹ {!depValue.SRValue? 0 : depValue.SRValue}</h4>
                                        </div>
                                    </div>
                                    
                                </div>
                                </div> <br/>
                                
                                {/* <div className="Interest-Pie-chart">
                                    <h1>Pie data section</h1>
                                    <Pie 
                                    data={data} 
                                    updateMode = "reset"
                                    />
                                </div> */}
                            
                            </div>
                        }
                        </div>
    )
}