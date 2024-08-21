/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function UseEffect2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);

    



    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (<>
        <p>Window Width: {width}px</p>
        <p>Window Hight: {height}px</p>
    </>)
}


export default UseEffect2