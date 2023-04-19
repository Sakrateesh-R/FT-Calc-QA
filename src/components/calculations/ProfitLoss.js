import { useState } from "react";




export default function ProfitLoss(){

    const [profitData, setProfitData] = useState({
        SellingPrice : 0,
        ActualPrice : 0
    })
    const [calProfit, setCalProfit] = useState({})


    // Handling change function in input tag 
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setProfitData({...profitData,[name]:value})
        console.log(profitData)
    }

    //Calculating profit when user clicks on calculate button
    function CalculateProfit(){
        let profitLoss = profitData.SellingPrice - profitData.ActualPrice;

        console.log(profitLoss)
        if (profitLoss>1){
            const profitpercentage = profitLoss/profitData.ActualPrice*100;

            setCalProfit({
                profitpercentage : profitpercentage,
                profit : profitLoss
            })
            

        }
        console.log(calProfit)  

    }


    return(
        <div className="Profit-container">
            <div className="Profit-body">
                <h1>Profit or Loss Calculator</h1>
                <div className="Profit-input-section">
                    <label className="form-label">Enter the Selling Price</label>
                    <input type="number" className="form-control" name="SellingPrice" value={profitData.SellingPrices} onChange={handleChange} id = "sellingPrice" />
                    <label className="form-label">Enter the Actual Price</label>
                    <input type = "number" className="form-control" name="ActualPrice" value={profitData.ActualPrice} onChange={handleChange} id = "ActualPrice" /><br/>
                    <button className="btn btn-primary" onClick={CalculateProfit}>FT Calculate</button>
                </div>
            </div>
            <div className="Profit-Result-body">
                <h2>Your Profit : {calProfit.profit}</h2>
                <h2>Your Profit Percentage : {calProfit.profitpercentage}</h2>
            </div>
        </div>
    )
}