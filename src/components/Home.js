import { useState,useEffect } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {ErrorBoundary} from "react-error-boundary";
import ProfitLoss from "./calculations/ProfitLoss";
  
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home(){
    const [data, setData] = useState({});
    const [calculateInterest, setCalculateInterest] = useState({
        totalAmount:0,
        rateOfInterest:0,
        noOfYear:0
    })
    const [afterCalculate, setAfterCalculate] = useState({ })
   
    // const [rateOfInterest, setRateOfInterest] = useState()
    // const [noOfYear, setNoOfYear] = useState()
    var InterestCalculate = null;
   
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setCalculateInterest({...calculateInterest,[name]:value})
        // if(name == calculateInterest.noOfYear){
        //     calculateInterest
        // }
        // else{
        //     console.log("else")
        // }
        // if(name == calculateInterest.totalAmount){
        //     setCalculateInterest({totalAmount : [value]})
        // }
        // else if(name == calculateInterest.rateOfInterest){
        //     calculateInterest.rateOfInterest += value;
        // }
        // else{
        //     calculateInterest.noOfYear = value;
        // }
        // console.log(calculateInterest)
    }
   

    function formatAsPercentage(num) {
        return new Intl.NumberFormat('default', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(num);
      }
    //PDF render section
    // Create styles
    
    //Pie Char section
    const [pieData, setPieData] = useState([]);
    console.log(pieData)
    const [displayPie, setDisplayPie] = useState({
        value : false,
    })
    //Interest Calculate section    
    const Calculate = () => {
        console.log(calculateInterest)
        if(calculateInterest.totalAmount <= 0 || calculateInterest.noOfYear <= 0 || calculateInterest.rateOfInterest <= 0){
            alert("Please enter valid data and proceed further.")
        }else {
            InterestCalculate = (Number(calculateInterest.totalAmount)*Number(calculateInterest.noOfYear)*Number(calculateInterest.rateOfInterest)) / 100;
           // console.log(InterestCalculate)
            var repayAmount =  Number(calculateInterest.totalAmount) + InterestCalculate
           // console.log(repayAmount)
            var percentRate = calculateInterest.totalAmount/InterestCalculate
           // console.log(percentRate)

            //Getting no of Months
            var noOfMonths = '';
            for(var i = 0; i<=calculateInterest.noOfYear; i++){
                noOfMonths = 12*i
            }
            //console.log(noOfMonths)
            var monthlyDue = repayAmount/noOfMonths
            //console.log(monthlyDue)
            console.log(InterestCalculate)
            setAfterCalculate({
                LoanAmount : calculateInterest.totalAmount,
                TotalSum : repayAmount,
                InterestAlone: InterestCalculate,
                monthlyPayment: monthlyDue
            })
            setPieData([...pieData,
                {name: 'Loan Amount', value:calculateInterest.totalAmount},
                {name: 'Interest Amount', value:InterestCalculate},
                {name: 'Total Amount', value:repayAmount}])
                console.log(afterCalculate.InterestAlone)
            setData({labels: ['Loan Amount', 'Interest Amount'],
            datasets: [
              {
                label: "FT Calc",
                data: [calculateInterest.totalAmount,InterestCalculate,],
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
            console.log(pieData + "Pie Data")  
            setDisplayPie({value:true})
        }
   
    }
    function Reset() {
        if(displayPie){
            setCalculateInterest({
                totalAmount:0,
                rateOfInterest:0,
                noOfYear:0
            })
            
        }
        setAfterCalculate({})
        setDisplayPie({value:false})
       
    }
    function handleUpdate (e){
        var obj_map = Object.entries(calculateInterest);
        console.log(obj_map)
        // const update = calculateInterest.map((value, i) => {
        //     if (i == true){
        //         console.log(i)
        //     }
        // })
    }
    handleUpdate()
   
    
    
    //const demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';
    return(
        <div className="body-position-container">
            <div className="Home-page-container col-lg-12">
                <div className="Home-Interest-Section-Container">
                    <div className="Interest-Section-container">
                    
                        <div className="Interest-container">
                            
                            <div className="Interest-container-section1">
                                <h1 id="CI" className="h1">Calculate Interest</h1>
                                <label className="form-label">Loan amount</label><br/>
                                <input type="number" pattern="[0-9]" className="form-control" id = "totalAmount" name = "totalAmount" value={calculateInterest.totalAmount} onFocus={ (e) => e.target.value=''} onChange={handleChange} onBlur ={(e) => e.target.value = calculateInterest.totalAmount} /> <br/>
                                <label className="form-label">Interest rate</label><br/>
                                <input type="number" className="form-control" id = "rateOfInterest" name = "rateOfInterest" value={calculateInterest.rateOfInterest} onFocus={ (e) => e.target.value=''} onBlur ={(e) => e.target.value = calculateInterest.rateOfInterest} onChange={handleChange} /> <br/>
                                <label className="form-label">Loan term (Years)</label><br/>
                                <input type="number" className="form-control" id = "noOfYear" name = "noOfYear" value={calculateInterest.noOfYear} onFocus={ (e) => e.target.value=''} onBlur ={(e) => e.target.value = calculateInterest.noOfYear} onChange={handleChange} /> <br/><br/>
                                <button  onClick={Calculate} className="btn-calc btn btn-primary"> FT Clac Interest </button>
                                <button className="btn btn-danger" onClick={Reset}> Reset </button>
                                
                            </div>
                            <br/>
                            
                            
                        </div> 
                        { displayPie.value == false? console.log("not rendered") :
                        <div className="Dynamic-interest-section">
                            <div className="Interest-Result">
                                <h1>Your Loan Estimate</h1>
                                <div className="Interest-Result-Section">
                                    <div className="Interest-Result-Section-left" >
                                        <h2>Monthly Due</h2>
                                        <h4>₹{!afterCalculate.monthlyPayment ? 0 : formatAsPercentage(afterCalculate.monthlyPayment)}</h4> 
                                    </div>
                                    <div className="Interest-Result-Section-right" >
                                        <h2>Overview</h2>
                                        <div className="Interest-Result-Overview">
                                            <h4 className="form-label" >Loan Amount </h4>
                                            <h4>₹ {!afterCalculate.LoanAmount? 0 : afterCalculate.LoanAmount}</h4>
                                            <h4 className="form-label" >Total interest payments</h4>
                                            <h4 >₹ {!afterCalculate.InterestAlone ? 0 : afterCalculate.InterestAlone}</h4>
                                            <h4 className="form-label" >Total loan payments  </h4>
                                            <h4>₹ {!afterCalculate.TotalSum ? 0 : afterCalculate.TotalSum}</h4>
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