import { useState } from "react";



function MyComponent() {
    
    const [car, setCar] = useState({make: "Ford", model: "Mustang", year: 1964});


    function handleYearChange(event){
         setCar( c=> ({ ...c, year: event.target.value }))
    }
    
    function handleMakeChange(event){
        setCar( c=> ({ ...c, make: event.target.value }))
    }

    function handleModelChange(event){
        setCar( c=> ({ ...c, model: event.target.value }))
    }

    return (
        <div>
            <p>Your favourite car is {car.year} {car.model} {car.make}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange} /><br/>
            <input type="text" value={car.make} onChange={handleMakeChange} /><br/>
        </div>
    )
}

export default MyComponent;