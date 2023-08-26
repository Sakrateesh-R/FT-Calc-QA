import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2';
import axios from 'axios';


var apiURL = "https://ft-calc-backend.onrender.com/";

export default function Speed() {

  const[calculateSpeed, setCalculateSpeed] = useState({
    distance : 0,
    time : 0
  })
  const [afterCalculate, setAfterCalculate] = useState({ })
  //Pie Char section
  const [data, setData] = useState({});
  const [pieData, setPieData] = useState([]);
  console.log(pieData)
  const [displayPie, setDisplayPie] = useState({
      value : false,
  })

  const handleChange = (e) =>{
    const{name,value} = e.target;
    setCalculateSpeed({...calculateSpeed,[name]:value})
  }

  const Calculate = () => {
    console.log(calculateSpeed)
    if(calculateSpeed.distance <= 0 || calculateSpeed.time <= 0){
        alert("Please enter valid data and proceed further.")
    }else {
        const CalculateSpeed = (Number(calculateSpeed.distance)/Number(calculateSpeed.time));
        console.log(CalculateSpeed)
        setAfterCalculate({
            speed : calculateSpeed
        })
        setPieData([...pieData,
            {name: 'Travelled Distance', value:calculateSpeed.distance},
            {name: 'Time Taken', value:calculateSpeed.time},
            {name: 'Speed', value:CalculateSpeed}])
            console.log(afterCalculate.InterestAlone)
        setData({labels: ['Distance', 'Time','Speed'],
        datasets: [
          {
            label: "FT Calc",
            data: [calculateSpeed.distance,calculateSpeed.time,CalculateSpeed],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'white'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'black'
            ],
            borderWidth: 1,
          }
        ],
        
    })
        console.log(pieData + "Pie Data")  
        setDisplayPie({value:true})
    }
    const DBdata = {
        CalculatedData:'Calculated Speed'
    }
    const AddData = (e) => {
         axios.post(`${apiURL}addData`,DBdata)
            .then( res => console.log(res))
            .catch(err => err)
        }
    //AddData()

  }
  function Reset() {
      if(displayPie){
          setCalculateSpeed({
              distance:0,
              time:0
          })
          
      }
      setAfterCalculate({})
      setDisplayPie({value:false})
    
  }
  function handleUpdate (e){
      var obj_map = Object.entries(calculateSpeed);
      console.log(obj_map)
      // const update = calculateSpeed.map((value, i) => {
      //     if (i == true){
      //         console.log(i)
      //     }
      // })
  }
  handleUpdate()


  return (
    <div className="body-position-container">
      <div className="Home-page-container col-lg-12">
          <div className="Home-Interest-Section-Container">
              <div className="Interest-Section-container">

                  <div className="Interest-container">
                      
                      <div className="Interest-container-section1">
                          <h1 id="CI" className="h1">Calculate Speed</h1>
                          <label className="form-label">Distance Travelled</label><br/>
                          <input type="number" pattern="[0-9]" className="form-control" required id = "distance" name = "distance" value={calculateSpeed.distance} onFocus={ (e) => e.target.value=calculateSpeed.distance==0? '' : calculateSpeed.distance} onChange={handleChange} onBlur ={(e) => e.target.value = calculateSpeed.distance} /> <br/>
                          <label className="form-label">Time Taken</label><br/>
                          <input type="number" className="form-control" maxLength={10} required id = "time" name = "time" value={calculateSpeed.time} onFocus={ (e) => e.target.value=calculateSpeed.time==0?'':calculateSpeed.time} onBlur ={(e) => e.target.value = calculateSpeed.time} onChange={handleChange} /> <br/>
                          <button  onClick={Calculate} className="btn-calc btn btn-primary"> FT Calc Interest </button>
                          <button className="btn btn-danger" onClick={Reset}> Reset </button>
                          
                      </div>
                      <br/>
                      
                      
                  </div> 
                  { displayPie.value == false? console.log("not rendered") :
                  <div className="Dynamic-interest-section">
                      <div className="Interest-Result">
                          <h1>Your Loan Estimate</h1>
                          <div className="Interest-Result-Section py-3">
                              <div className="Interest-Result-Section-left" >
                                  <h3>Monthly Due</h3>
                                  <h4><b>₹{!afterCalculate.Speed ? 0 : afterCalculate.Speed}</b></h4> 
                              </div>
                              <div className="Interest-Result-Section-right" >
                                  <h3>Overview</h3>
                                  <div className="Interest-Result-Overview py-3">
                                      <h5 className="form-label" ><b>Distance Travelled</b> </h5>
                                      <h6>₹ {!calculateSpeed.distance? 0 : calculateSpeed.distance}</h6>
                                      <h5 className="form-label" ><b>Time Taken to Travell </b></h5>
                                      <h6 >₹ {!calculateSpeed.time ? 0 : calculateSpeed.time}</h6>
                                      <h5 className="form-label" ><b>Speed </b> </h5>
                                      <h6>₹ {!afterCalculate.speed ? 0 : afterCalculate.speed}</h6>
                                  </div>
                              </div>
                              
                          </div>
                          </div> <br/>
                          
                          <div className="Interest-Pie-chart">
                              <h1>Pie data section</h1>
                              <Pie 
                              data={data} 
                              updateMode = "reset"
                              redraw = {true}
                              />
                          </div>
                      
                      </div>
                  }
                  </div>
                  
                  <br/>
          </div>           
              
      </div> 
  </div>      

  )
}
