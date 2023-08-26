import React from 'react'

export default function PhysicsMain() {
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
                    <h4>Physics Modules</h4>
                    <div className="card text-center" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title p-2"><i className="fa-solid fa-car fa-beat-fade fa-2xl"></i></h5>
                            <p className="card-text">Speed Calculation</p>
                            <a href="/speed" className="btn btn-primary">Calculate Speed</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}
