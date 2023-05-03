import { useState } from "react"

export default function Deprecation(){

    const [depValue, setDepValue] = useState({})
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setDepValue({...depValue,[name]:value})
        console.log(depValue)
    }
    console.log(depValue)

    function Calculate(){

    }

    function Reset(){
        setDepValue({});
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
        </div>
    )
}