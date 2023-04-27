
export default function Deprecation(){

    return(
        <div className="deprecation-container body-position-container">
            <h1>Calculate Deprecation</h1>
            <div className="Depreciation-container-body">
                <div className="Depreciation-calculate-section">
                    <div className="Depreciation-input-section">
                        <label className="form-label">Cost of the Asset</label><br/>
                        <input type="number" className="form-control"/><br/>
                        <label className="form-label">Salvage/Residual value (in percentage %)</label><br/>
                        <input type="number" className="form-control"/><br/>
                        <label className="form-label">Method of Depreciation</label><br/>
                        <input type="number" className="form-control"/><br/>
                        <label className="form-label">Life of Asset</label><br/>
                        <input type="range" className="form-range" min={0} max={100}/>
                    </div>
                </div>

            </div>
        </div>
    )
}