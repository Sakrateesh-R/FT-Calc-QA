import { useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";

export function formatAsPercentage(num) {
    return new Intl.NumberFormat('default', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }

ChartJS.register(ArcElement, Tooltip, Legend);
var apiURL = "https://ft-calc-backend.onrender.com/"
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
    const [piedata, setPieData] = useState()

    //var obj = new Object();
    //var obj = new Object();

    function Calculate(){
        //const loopnum = depValue.LOA;
        if(!depValue.CTA <= 0 || !depValue.LOA <= 0 || !depValue.SRValue <= 0){
            
            var Initial_Amount = depValue.CTA;

            var amountOfDep = Initial_Amount * depValue.SRValue / 100
            console.log(amountOfDep)

            var depAmount =  (Initial_Amount - amountOfDep) / depValue.LOA
            var swapAmount = depAmount;
            setCalculateRender({
                calculateRender: true
            })
            setPieData({
                OriginalAmount:formatAsPercentage(Initial_Amount),
                DepAmount:formatAsPercentage(Math.round(depAmount)),
                AmountOfDep : formatAsPercentage(Math.round(amountOfDep))
            })
            //console.log("Pie Date" +" "+ piedata)
            setData({labels: ['Asset Original Value','Asset Selling Price'],
            datasets: [
            {
                label: "FT Calc",
                data: [Initial_Amount,amountOfDep],
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
            // console.log(deprecationAmount)
            // console.log(obj)
            // To get Data from Mongo DB //console.log(axios.get(apiURL).then(data => console.log(data.data)).catch(err => err));
            const DBdata = {
                CalculatedData:'Calculated Depreciation'
            }
            const AddData = (e) => {
                 axios.post(`${apiURL}addData`,DBdata)
                    .then( res => console.log(res))
                    .catch(err => err)
                }
            //AddData()
        }else{
            alert("Please Enter all the fields and click on FT Calc Depreciation")
        }
        
            
    }
    function Reset(){
        setDepValue({});
        setCalculateRender({
            calculateRender:false
        })
        wait(500)
        document.location.reload()
    }

    return(
        <div className="body-position-container">
            <div className="Home-page-container col-lg-12">
                <div className="Home-Interest-Section-Container">
                    <div className="Interest-Section-container">
                    
                        <div className="Interest-container">
                            
                            <div className="Interest-container-section1">
                                <h1 id="CI" className="h1">Depreciation Calculator</h1>
                                <label className="form-label">Asset Buying Price</label><br/>
                                <input type="number" pattern="[0-9]" className="form-control" required maxLength={10} id = "totalAmount" name = "CTA" value={depValue.CTA} onFocus={ (e) => e.target.value= depValue.CTA == 0 ? '':depValue.CTA} onChange={handleChange} onBlur ={(e) => e.target.value = depValue.CTA} /> <br/>
                                <label className="form-label">Asset Salvage in % </label><br/>
                                <input type="number" className="form-control" maxLength={10} required id = "rateOfInterest" name = "SRValue" value={depValue.SRValue} onFocus={ (e) => e.target.value=depValue.SRValue == 0 ? '':depValue.SRValue} onBlur ={(e) => e.target.value = depValue.SRValue} onChange={handleChange} /> <br/>
                                <label className="form-label">Asset Useful Years</label><br/>
                                <input type="number" className="form-control" maxLength={10} required id = "noOfYear" name = "LOA" value={depValue.LOA} onFocus={ (e) => e.target.value=depValue.LOA == 0 ? '':depValue.LOA} onBlur ={(e) => e.target.value = depValue.LOA} onChange={handleChange} /> <br/><br/>
                                <button  onClick={Calculate} className="btn-calc btn btn-primary"> FT Calc Deprecation </button>
                                <button className="btn btn-danger" onClick={Reset}> Reset </button>
                                
                            </div>
                            <br/>
                            
                            
                        </div> 
                        { !calculateRender.calculateRender ? console.log("not rendered") :
                        <div className="Dynamic-interest-section">
                            <div className="Interest-Result">
                                <h1>Your Deprecation Estimate</h1>
                                <div className="Interest-Result-Section">
                                    <div className="Interest-Result-Section-left" >
                                        <h2>Asset Selling Price</h2>
                                        <h4>₹{!piedata.DepAmount ? 0 : piedata.DepAmount}</h4> 
                                    </div>
                                    <div className="Interest-Result-Section-right" >
                                        <h2>Depreciation Overview</h2>
                                        <div className="Interest-Result-Overview">
                                            <h4 className="form-label" >Asset Original Value </h4>
                                            <h4>₹ {!piedata.OriginalAmount? 0 : piedata.OriginalAmount}</h4>
                                            <h4 className="form-label" > Assest Selling Price</h4>
                                            <h4 >₹ {!piedata.AmountOfDep ? 0 : piedata.AmountOfDep}</h4>
                                            <h4 className="form-label" >Asset Rate of Deprecation Per Year </h4>
                                            <h4>₹ {!piedata.DepAmount ? 0 : piedata.DepAmount}</h4>
                                        </div>
                                    </div>
                                    
                                </div>
                                </div> <br/>
                                
                                <div className="Interest-Pie-chart">
                                    <h1>Pie data section</h1>
                                    <Pie 
                                    data={data} 
                                    updateMode = "reset"
                                    />
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