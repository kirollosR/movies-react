import React, {useState} from 'react';

const Counter = () => {
    // 1. useState [initial state of component]
    const [counter, setCounter] = useState(0);
    
    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }
    
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Counter</h1>

            <button className='btn btn-success' style={{padding: "5px 10px"}} onClick={increase}> + </button>

            <span> Counter = {counter} </span>
            
            <button className='btn btn-danger' style={{padding: "5px 10px"}} onClick={decrease}> - </button>
        </div>
    );
};

export default Counter;