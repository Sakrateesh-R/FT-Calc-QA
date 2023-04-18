import axios from "axios";
import { useState,useEffect } from "react";



export default function Curreny(){

    const [currencyData, setCurrencyData] = useState()
    const [objdata, setobjData] = useState([])
    useEffect(()=> {
        axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=TLhj3ZiBxmYN28LvFsb2tdmYDGpz4mUImncal4zL")
                .then( (res,req) => {
                    setCurrencyData(res.data.data)
                    //console.log(currencyData)
                } );
                
    },[])
    const objEntries = Object.entries(currencyData)

    return(
        <div className="Currency-container">
            <div className="Currency-body-container">
                <h1>Convert Currency</h1>
                <select value="Select a country">
                  {objEntries.map( (key) => {
                    <options>{key[0]}</options>
                  })}
                </select>
            </div>
        </div>
    )
}