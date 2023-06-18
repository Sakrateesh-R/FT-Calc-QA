
import { useState } from "react";

export default function BudgetCalculator(){
    const [inputFields, setInputFields] = useState([
        {name: '', age: ''}
    ])
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
     }
     const addFields = () => {
        let newfield = { name: '', age: '' }
    
        setInputFields([...inputFields, newfield])
    }
    return(
        <div className="body-position-container">
            <form>
                {inputFields.map((input, index) => {
                return (
                    <div key={index}>
                        <input
                            name='name'
                            placeholder='Name'
                            value={input.name}
                            onChange={event => handleFormChange(index, event)}
                        />
                        <input
                            name='age'
                            placeholder='Age'
                            value={input.age}
                            onChange={event => handleFormChange(index, event)}
                        />
                        </div>
                        
                )
                })}
            </form>
            <button onClick={addFields}>Add More..</button>
            <div className="Budget-container">
                <div className="Budget-section">
                    
                </div>
            </div>
            
       
        </div>
        
     
        
    )
}