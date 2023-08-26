import React from 'react'

export default function FinanceMain() {
  return (
    <div className="body-position-container">
            <div className="container home-container " style={{maxWidth:" inherit"}}>
                <div className="body-container ">
                    <div className="body-header-section ">
                        <figure class="text-center py-4 ">
                        <blockquote class="blockquote">
                            <h1>FT Calculator</h1>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <i>A product of Future Technology</i>
                        </figcaption>
                        </figure>
                    </div>
                    
                </div>
                
            </div>
            <div className="container px-4 py-2">
                <div className="home-body-container" >
                    <div className="feature-list my-4">
                        <h4>Finance Modules</h4>
                        <div className='row p-2 justify-content-around'>
                            <div className="card text-center col-3" style={{width: "18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title p-2"><i class="fa-solid fa-money-bill-trend-up fa-2xl" style={{color: "#2cb805"}}></i></h5>
                                    <p className="card-text">Interest Calculator</p>
                                    <a href="/interest" className="btn btn-primary">Calculate Interest</a>
                                </div>
                            </div>
                            <div className="card text-center col-4" style={{width: "18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title p-2"><i class="fa-solid fa-faucet-drip fa-beat-fade fa-2xl" style={{color: "#ff0026"}}></i></h5>
                                    <p className="card-text">Profit/Loss Calculator</p>
                                    <a href="/profit/loss" className="btn btn-primary">Calculate Pipe Pressure</a>
                                </div>
                            </div>
                            <div className="card text-center col-3" style={{width: "18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title p-2"><i class="fa-solid fa-faucet-drip fa-beat-fade fa-2xl" style={{color: "#ff0026"}}></i></h5>
                                    <p className="card-text">Depreciation Calculator</p>
                                    <a href="/deprecation" className="btn btn-primary">Calculate Pipe Pressure</a>
                                </div>
                            </div>
                        </div>
                            
                        <hr/>
                    </div>
                </div>
            </div>
            
        </div>
  )
}
