import React, {useEffect, useState} from 'react';

const DetailBtn = () => {
    const [counter,setCounter] = useState(JSON.parse(localStorage.getItem("food") || 1))

    const getCash = () => {
        let task = JSON.parse(localStorage.getItem("food")) || 1
        task  = task + 1
        localStorage.setItem("food", JSON.stringify(task))
    }
    const decCash = () => {
        let task = JSON.parse(localStorage.getItem("food")) || 1
        task  =  task - 1
        localStorage.setItem("food", JSON.stringify(task))
    }

    return (
        <div>
            <div className='detail--block__state' style={{display: "flex", alignItems: "center",}}>
                <span className='cursor-pointer mx-5'  onClick={() => decCash(setCounter(counter -1))}>-</span>
                <h1>{counter}x</h1>
                <button onClick={() => getCash(setCounter(counter + 1))}>+</button>
            </div>
        </div>
    );
};

export default DetailBtn;