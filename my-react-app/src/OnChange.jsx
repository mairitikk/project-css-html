/* eslint-disable no-unused-vars */
import React, { useState } from "react";
function OnChange() {
    
    const [name, setName] = useState("Kylaline");
    const [quantity, setQuantity] = useState();
   
   
        function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    return (<div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>
        
        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: { quantity}</p>
    </div>
    )
}
export default OnChange