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
    const counterChange = () => {
      if (counter > 1){
          return setCounter(counter - 1)
      }else {
          return false
      }
    }

    return (
        <div>
            <div className='detail--block__state mx-3 flex justify-between items-center w-[100px]' >
                <span className='cursor-pointer mx-1'  onClick={() => counterChange()}>-</span>
                <h1>{counter}x</h1>
                <button className='mx-1' onClick={() => getCash(setCounter(counter + 1))}>+</button>
            </div>
        </div>
    );
};

export default DetailBtn;