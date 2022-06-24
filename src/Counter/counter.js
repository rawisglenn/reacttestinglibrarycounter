import React, { useState } from 'react';

function Counter (){

    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1)


    return(
        <div>
            <h3 data-testid="header">My Counter</h3>
            <h2 data-testid="counterEl" className={counterValue>=100 ? "big" : counterValue<0 ? "small": ""}>{counterValue}</h2>
            <button onClick={() => setCounterValue(counterValue-parseInt(inputValue))} data-testid="subBtn">-</button>
            <input type="number" name="name" data-testid="input" value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value);
            }}/>
            <button onClick={() => setCounterValue(counterValue+parseInt(inputValue))} data-testid="addBtn">+</button>
        </div>
    );
}

export default Counter;