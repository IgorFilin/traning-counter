import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Counter/Counter";
import {Button} from "./Button/Button";

function App() {
    let [counter, setCounter] = useState(0)
    console.log(counter)


    const addCount = () => {
        setCounter(counter += 1)
    }

    const resetCount = () => {
        setCounter(0)
    }

    return (

        <div className='content'>
            <Counter counter={counter}/>
            <div className='buttons'>
                <Button title={'inc'} callback={addCount}  value={counter === 5}/>
                <Button title={'reset'} callback={resetCount}  value={counter === 0}/>
            </div>
        </div>


    );
}

export default App;
