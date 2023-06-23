import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


var apiURL = "https://ft-calc-backend.onrender.com/"
//var apiURL = "http://localhost:5000/"
export default function Home(){

    const navigate = useNavigate();
    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        suggesstions:"",
        email:""
    })
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setData({...data,[name]:value})
        
        console.log(data)
    }

    const sendReview = () => {
        if(data.email=='' || data.firstName == '' || data.suggesstions ==''){
            alert("Enter all the fields and click on submit")
        }else{
            const AddData = (e) => {
                axios.post(`${apiURL}addReview`,data)
                   .then( res => console.log(res))
                   .catch(err => err)
            }
            AddData()
            alert("Thanks for providing suggestions, we will look and work on it")
        }
        
        
    }
    const url = new URL(window.location);
    url.searchParams.delete('message');
    window.history.replaceState(null, null, url)
    
    


    return(
        <div className="body-position-container">
            <div className="container home-container ">
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
                <div className="home-body-container">
                    <div className="home-section-1">
                        <h3>Welcome to our Calculation App!</h3>
                        <p className="para-content">Simplify your life with our powerful and user-friendly Calculation App. Whether you're a student, professional, or just need quick calculations on the go, our app is here to help. With its intuitive interface and extensive range of features, it's the perfect tool for all your mathematical needs.</p>
                    </div>
                    <div className="feature-list my-4">
                        <h4>Our Application modules</h4>
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
                    </div>
                    <div className="Suggesstions-box mx-2">
                        <h4>Drop your suggesstions below</h4>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name = "email" value={data.email} onFocus={ (e) => e.target.value = data.email==0? '' : data.email} onChange={handleChange} onBlur ={(e) => e.target.value = data.email}/>
                                </div><br/>
                                <div className="form-group col-md-6">
                                
                                    <div className="row">
                                        <div className="col">
                                        <input type="text" className="form-control" placeholder="First name"name = "firstName" value={data.firstName} onFocus={ (e) => e.target.value = data.firstName==0? '' : data.firstName} onChange={handleChange} onBlur ={(e) => e.target.value = data.firstName}/>
                                        </div>
                                        <div className="col">
                                        <input type="text" className="form-control" placeholder="Last name" name = "lastName" value={data.lastName} onFocus={ (e) => e.target.value = data.lastName==0? '' : data.lastName} onChange={handleChange} onBlur ={(e) => e.target.value = data.lastName}/>
                                        </div>
                                    </div>
                               
                                </div>
                            </div>
                            <div className="mb-3 col-md-6 my-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Suggesstions</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"name = "suggesstions" value={data.suggesstions} onFocus={ (e) => e.target.value = data.suggesstions==0? '' : data.suggesstions} onChange={handleChange} onBlur ={(e) => e.target.value = data.suggesstions}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={sendReview}>Submit</button>
                        </form>
                    </div>
                </div>
                {/* Popup model */}
                {/* <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                        </div>
                    </div>
                </div> */}
            </div>
            
        </div>
    )
}