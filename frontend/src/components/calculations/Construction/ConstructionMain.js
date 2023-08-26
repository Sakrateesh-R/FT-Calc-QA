import React from 'react'

export default function ConstructionMain() {
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
                    <h4>Construction Modules</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Barlow's Pipe Pressure Calculator</b><br/><br/>
                            <p className="para-content">
                                Barlow’s Formula calculator is a highly useful tool in determining the requirements of your pipe. But ultimately, the design of complex pressure containment systems involves much more than the application of Barlow’s Formula. For almost all pressure vessels, ASME code stipulates the requirements for design and testing.
                            </p>
                            <a href="/pressure" className="nav-item text-danger nav-link">Calculate Pressure here</a>
                        </li>
                        
                        
                        
                    </ul>
                    <hr/>
                </div>
            </div>
        </div>
        
    </div>
  )
}
