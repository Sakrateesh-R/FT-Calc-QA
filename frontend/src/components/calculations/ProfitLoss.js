import { useState } from "react";
import axios from "axios";

var apiURL = "http://localhost:5000/";

export default function ProfitLoss(){
    function formatAsPercentage(num) {
        return new Intl.NumberFormat('default', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(num);
      }

    const [calculateProfit, setCalculateProfit] = useState({
        SellingPrice:0,
        ActualPrice:0
    })
    const [calProfit, setCalProfit] = useState({})
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setCalculateProfit({...calculateProfit,[name]:value})
        
        console.log(calculateProfit)
    }
    function CalculateProfit(){
        setCalProfit({})
        var sum = calculateProfit.SellingPrice - calculateProfit.ActualPrice
        
        console.log(sum)

        if(sum>0){
            const profit = sum
            const profitPercentage = sum/calculateProfit.ActualPrice *100;

            console.log(profit+ " "+ profitPercentage)
            setCalProfit({
                profit:profit,
                profitPercentage:formatAsPercentage(profitPercentage)
            })
        }
        else    {
            const loss = Math.abs(sum)
            
            const lossPercentage = loss * 100 / calculateProfit.ActualPrice
            console.log(lossPercentage +" " + loss)
            setCalProfit({
                loss:loss,
                lossPercentage:formatAsPercentage(lossPercentage)
            })
        }
        console.log(calProfit)
        const DBdata = {
            CalculatedData:'Calculated Profit/Loss'
        }
        const AddData = (e) => {
             axios.post(`${apiURL}addData`,DBdata)
                .then( res => console.log(res))
                .catch(err => err)
            }
        AddData()

    }

    return(
        <div className="body-position-container">
            <div className="Profit-container">
                <div className="Profit-body">
                    <h1>Profit or Loss Calculator</h1>
                    <div className="Profit-input-section">
                        <label className="form-label">Enter the Selling Price</label>
                        <input type="number" className="form-control" name="SellingPrice" value={calculateProfit.SellingPrice} onChange={handleChange} id = "sellingPrice" onFocus={ (e) => e.target.value=''} onBlur ={(e) => e.target.value =calculateProfit.SellingPrice} />
                        <label className="form-label">Enter the Actual Price</label>
                        <input type = "number" className="form-control" name="ActualPrice" value={calculateProfit.ActualPrice} onChange={handleChange} onFocus={ (e) => e.target.value=''} onBlur={(e) => e.target.value = calculateProfit.ActualPrice} id = "ActualPrice" /><br/>
                        <button className="btn btn-primary" onClick={CalculateProfit}>FT Calculate</button>
                    </div>
                </div>
                { calProfit.loss ? 
                
                <div className="Profit-Result-body">
                    <div className="Profit-Result-Section">
                        <h2>Your Loss : {calProfit.loss} </h2>
                        {calProfit.loss? <i className="fa-solid fa-arrow-down fa-bounce fa-2xl" style = {{color: "#ff1100"}}></i> : " " }
                    </div>
                    <h2>Your Loss Percentage : {calProfit.lossPercentage} %</h2>
                </div>
                :
                <div className="Profit-Result-body">
                <div className="Profit-Result-Section">
                    <h2>Your Profit :{calProfit.profit} </h2> 
                    {calProfit.profit? <i className="fa-solid fa-arrow-up fa-bounce fa-2xl" style = {{color: "#08f718"}}></i> : " "}
                    
                </div>
                
                <h2>Profit Percentage : {calProfit.profitPercentage} %</h2>
            </div>
                }
                
            </div>
        </div>
    )
}