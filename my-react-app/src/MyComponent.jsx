// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
function MyComponent() {
    const [name, setName] = useState("Kulaline");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () =>
    {
        setName("MinniMouse")
    }
    const incrementAge = () =>{
        setAge(age + 1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    
    return(
    <div className="">
        <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>
            
             <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>)
}
export default MyComponent