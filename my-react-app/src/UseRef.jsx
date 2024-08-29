/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from "react"

function UseRef() {

   

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    useEffect(() => {
        console.log("component render")

    })

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    
       function handleClick2() {
        inputRef2.current.focus();
           inputRef2.current.style.backgroundColor = "";
           inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

       function handleClick3() {
        inputRef3.current.focus();
           inputRef3.current.style.backgroundColor = "";
           inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }


    return (
        <div>
        <button onClick={handleClick1}>Vajuta Siia 1
            </button>
            <input ref={inputRef1} type="text" />

            <button onClick={handleClick2}>Vajuta Siia 2
            </button>
            
            <input ref={inputRef2} type="text" />
            <button onClick={handleClick3}>Vajuta Siia 3
            </button>
            <input ref={inputRef3} type="text" />
        
        </div>)
}

export default UseRef