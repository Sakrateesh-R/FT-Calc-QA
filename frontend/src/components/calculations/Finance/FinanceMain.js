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
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Interest Calculation</b><br/><br/>
                                <p className="para-content">
                                    Interest calculation is the process of determining the amount of interest earned or paid on a principal amount over a specific period of time. It is a fundamental concept in finance and plays a crucial role in various financial transactions.
                                </p>
                                <a href="/interest" className="nav-item text-danger nav-link">Calculate Interest here</a>
                            </li>
                            <li className="list-group-item">
                                <b>Profit/Loss Calculation</b><br/><br/>    
                                <p className="para-content">
                                    Profit or loss calculation is the process of determining the financial gain or loss resulting from a business transaction or investment. It is an essential aspect of financial analysis and decision-making for individuals and businesses alike.
                                    <br/>
                                    Profit or loss calculation helps assess the financial performance of a business, determine the success of an investment, and make informed decisions about pricing, cost control, and resource allocation. It is crucial for financial planning, evaluating the viability of projects, and measuring the overall health and sustainability of an enterprise.
                                </p>
                                <a href="/profit/loss" className="nav-item text-danger nav-link">Calculate Profit/Loss here</a>
                            </li><li className="list-group-item">
                                <b>Depreciation Calculation</b><br/><br/>
                                <p className="para-content">
                                Straight-line depreciation provides a systematic and straightforward way to allocate the cost of an asset over its useful life. It offers consistency in financial reporting, facilitates comparisons across different assets, and simplifies the accounting process. However, it may not accurately reflect the actual decline in an asset's value, particularly if its value decreases more rapidly in the early years or fluctuates over time.

                                Understanding straight-line depreciation calculation is essential for financial planning, budgeting, and accurate reporting of an organization's financial statements. It helps businesses assess the impact of depreciation on profitability, evaluate asset replacement or upgrade decisions, and comply with accounting standards and regulations.
                                </p>
                                <a href="/deprecation" className="nav-item text-danger nav-link">Calculate Depreciation here</a>
                            </li><li className="list-group-item">
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
