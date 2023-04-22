import { useState } from "react";

export default function ProfitLoss(){

    const [calculateProfit, setCalculateProfit] = useState({
        SellingPrice:0,
        ActualPrice:0
    })
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setCalculateProfit({...calculateProfit,[name]:value})
        
        console.log(calculateProfit)
    }
    function CalculateProfit(){

        var sum = calculateProfit.SellingPrice - calculateProfit.ActualPrice
        
        console.log(sum)

        if(sum>0){
            const profit = sum
            const profitPercentage = sum/calculateProfit.ActualPrice *100;

            console.log(profit+ " "+ profitPercentage)
        }
        else    {
            const loss = Math.abs(sum)
            
            const lossPercentage = loss * 100 / calculateProfit.ActualPrice
            console.log()
        }

    }

    return(
        <div className="Profit-container">
            <div className="Profit-body">
                <h1>Profit or Loss Calculator</h1>
                <div className="Profit-input-section">
                    <label className="form-label">Enter the Selling Price</label>
                    <input type="number" className="form-control" name="SellingPrice" value={calculateProfit.SellingPrice} onChange={handleChange} id = "sellingPrice" />
                    <label className="form-label">Enter the Actual Price</label>
                    <input type = "number" className="form-control" name="ActualPrice" value={calculateProfit.ActualPrice} onChange={handleChange}  id = "ActualPrice" /><br/>
                    <button className="btn btn-primary" onClick={CalculateProfit}>FT Calculate</button>
                </div>
            </div>
            <div className="Profit-Result-body">
                <h2>Your Profit : </h2>
                <h2>Your Profit Percentage : </h2>
            </div>
        </div>
    )
}