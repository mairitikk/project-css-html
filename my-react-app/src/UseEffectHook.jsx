/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
function UseEffectHook() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);
    function addCount() {
    setCount(c => c + 1);
}


    return (<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
    
    </>)
}

export default UseEffectHook