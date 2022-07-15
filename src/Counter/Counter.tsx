import React from 'react';
import s from './Counter.module.css'


type CounterTypeProps = {
    counter:number


}

export const Counter:React.FC<CounterTypeProps> = ({counter}) => {
    return (
        <div className={counter === 5? s.countFive :s.counter}>
            {counter}
        </div>
    );
};

