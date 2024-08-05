// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
function MyComponent() {
    const [name, setName] = useState();
    const updateName = () =>
    {
        setName("MinniMouse")
    }
    
    return <div className="">
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>
}
export default MyComponent