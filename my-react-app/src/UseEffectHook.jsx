/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
function UseEffectHook() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `You clicked ${count} ${color}times`;
    }, [count, color]);
    function addCount() {
    setCount(c => c + 1);
    }
    
        function subtractCount() {
            setCount(c => c - 1);
            
            
    }
    function changeColor() {
                setColor(c => c === "green"  ? "red": "green")
            }



    return (<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>
    
    </>)
}

export default UseEffectHook