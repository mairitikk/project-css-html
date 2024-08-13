/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function UpdateObject() {
    
    const [car, setCar] = useState({
        brand: "Toyota",
        year: 2016,
        model: "Yaris"
    });
    
    function handleYearChange(event) {
        setCar(c=> ({...c,year: event.target.value}));
    }
    function handleBrandChange(event) {
        setCar(c=> ({...c, brand: event.target.value}));
        
    }
    function handleModelChange(event) {
        setCar(c=> ({...c,model: event.target.value}));
    }

    return (<div>
        <p>Your favorite car is: {car.year} {car.brand} {car.model }</p>
        <input type="number" value={car.year} onChange={handleYearChange}/> <br />
        <input type="text" value={car.brand} onChange={handleBrandChange} /> <br />
         <input type="text" value={car.model} onChange={handleModelChange} /> <br />
    </div>)
}
export default UpdateObject