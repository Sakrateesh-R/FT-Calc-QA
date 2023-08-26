import { useState } from "react";
import axios from "axios";

var apiURL = "https://ft-calc-backend.onrender.com/";

export default function Addition(){
    function formatAsPercentage(num) {
        return new Intl.NumberFormat('default', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(num);
    }

    const [calculateAdd, setCalculateAdd] = useState({
        num1:0,
        num2:0
    })
    const [afterAdd, setAfterAdd] = useState(false)
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setCalculateAdd({...calculateAdd,[name]:value})
        
        console.log(calculateAdd)
    }
    function CalculateAddition(){
        setAfterAdd(true)
       console.log(Number(calculateAdd.num1)+Number(calculateAdd.num2))
      

    }
    console.log(afterAdd)
    return(
        <div className="body-position-container">
            <div className="Profit-container">
                <div className="Profit-body">
                    <h1> Addition Calculator </h1>
                    <div className="Profit-input-section">
                        <label className="form-label">Enter the first number</label>
                        <input type="number" className="form-control" name="num1" value={calculateAdd.num1} onChange={handleChange} id = "num1" onFocus={ (e) => e.target.value= calculateAdd.num1==0? '': calculateAdd.num1} onBlur ={(e) => e.target.value =calculateAdd.num1} />
                        <label className="form-label">Enter the second number</label>
                        <input type = "number" className="form-control" maxLength={10} name="num2" value={calculateAdd.num2} onChange={handleChange} onFocus={ (e) => e.target.value= calculateAdd.num2==0? '': calculateAdd.num2} onBlur={(e) => e.target.value = calculateAdd.num2} id = "num2" /><br/>
                        <button className="btn btn-primary" onClick={CalculateAddition}>FT-calc Add</button>
                    </div>
                </div>
                <div>
                    |<p>
                        Sum of two values:{Number(calculateAdd.num1)+Number(calculateAdd.num2)}
                    </p>
                </div>
               {/* { calProfit.loss ? 
                
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
                    <h2>Your Profit :{calProfit.profit? calProfit.profit : ' 0'} </h2> 
                    {calProfit.profit? <i className="fa-solid fa-arrow-up fa-bounce fa-2xl px-2" style = {{color: "#08f718"}}></i> : " "}
                    
                </div>
                
                <h2>Profit Percentage : {calProfit.profitPercentage? `${calProfit.profitPercentage} %` : '-'} </h2>
            </div>
                }
                 */}
            </div>
        </div>
    )
}