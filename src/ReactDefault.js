import React from "react";
import { useState, useEffect } from "react";

const ReactDefault = () => {
    useEffect(() => {
        console.log("This is working");
    }, []);
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Hello Jason this is working</h1>
            <h1>Counter {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )

}

export {ReactDefault};