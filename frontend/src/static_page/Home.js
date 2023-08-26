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
                    <div className="home-section-1">
                        <h3>Welcome to our Calculation App!</h3>
                        <p className="para-content">Simplify your life with our powerful and user-friendly Calculation App. Whether you're a student, professional, or just need quick calculations on the go, our app is here to help. With its intuitive interface and extensive range of features, it's the perfect tool for all your mathematical needs.</p>
                    </div>
                    <div className="feature-list my-4">
                        <h4>Our Application modules</h4>
                        <div className='row p-2 justify-content-around'>
                            <div className="card text-center col-3">
                                <div className="card-body">
                                    <h5 className="card-title p-2"><i class="fa-solid fa-flask fa-2xl" style={{color:"purple"}}></i></h5>
                                    <p className="card-text">Physics </p>
                                    <a href="/speed" className="btn btn-primary">1 Calculators</a>
                                </div>
                            </div>
                            <div className="card text-center col-4" >
                                <div className="card-body">
                                    <h5 className="card-title p-2"><i class="fa-solid fa-coins fa-2xl" style={{color:"gold"}}></i> <i class="fa-solid fa-arrow-trend-up fa-beat fa-2xl" style={{color:"green"}}></i></h5>
                                    <p className="card-text">Finance</p>
                                    <a href="/speed" className="btn btn-primary">3 Calculators</a>
                                </div>
                            </div>
                            <div className="card text-center col-3" >
                                <div className="card-body">
                                    <h5 className="card-title p-2"><i class="fa-solid fa-helmet-safety fa-2xl" style={{color:"orangered"}}></i></h5>
                                    <p className="card-text">Construction</p>
                                    <a href="/speed" className="btn btn-primary">1 Calculators</a>
                                </div>
                            </div>
                            
                        </div>
                        <div className='row p-2 justify-content-around'>
                            <div className="card text-center col-3 " >
                                <div className="card-body">
                                    <h5 className="card-title p-2"><i class="fa-solid fa-dna fa-2xl" style={{color:"red"}}></i></h5>
                                    <p className="card-text">Biology </p>
                                    <a href="/speed" className="btn btn-primary">1 Calculators</a>
                                </div>
                            </div>
                            <div className="card text-center col-4" >
                                <div className="card-body">
                                    <h5 className="card-title p-2"><i class="fa-solid fa-atom fa-2xl fa-spin" style={{color:"violet"}}></i></h5>
                                    <p className="card-text">Chemistry </p>
                                    <a href="/speed" className="btn btn-primary">0 Calculators</a>
                                </div>
                            </div>
                            <div className="card text-center col-3" >
                                <div className="card-body">
                                    <h5 className="card-title p-2"> <i class="fa-solid fa-calculator fa-2xl" style={{color:"olive"}}></i> </h5>
                                    <p className="card-text">Maths </p>
                                    <a href="/speed" className="btn btn-primary">1 Calculators</a>
                                </div>
                            </div>
                        </div>
                        
                        
                        <hr/>
                    </div>
                    <div className="Suggesstions-box mx-2 row justify-content-center">
                        <div className='col'>
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