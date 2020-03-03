import React from 'react';
import {useState} from "react";

function UseCount(defaultValue){
    const [count, setCount] = useState(defaultValue);

    let set = (newValue) => {
        setCount(count + newValue);
    };

    return [count, set];
}

export default UseCount;