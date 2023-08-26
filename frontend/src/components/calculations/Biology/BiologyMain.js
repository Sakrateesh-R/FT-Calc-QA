import React from 'react'

export default function BiologyMain() {
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
                    <h4>Biology Modules</h4>
                    <ul className="list-group list-group-flush">
                        <li  className="list-group-item">
                            <b>BMI Calculation</b><br/><br/>
                            <p className="para-content">
                                BMI (Body Mass Index) is a numerical value calculated based on an individual's weight and height. It is a widely used method to assess body composition and determine if a person's weight is within a healthy range.
                                BMI calculation is a widely recognized and easily accessible method for assessing weight status and determining potential health risks associated with weight. It serves as a starting point for discussions about weight management and can be used in conjunction with other assessments to form a more comprehensive understanding of an individual's health.
                            </p>
                            <a href="/bmi" className="nav-item text-danger nav-link">Calculate BMI here</a>
                        </li>
                        
                        
                        
                    </ul>
                    <hr/>
                </div>
            </div>
        </div>
        
    </div>
  )
}
