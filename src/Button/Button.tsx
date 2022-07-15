import React from 'react';
import s from './Button.module.css'

type TypeButton = {
    callback:()=>void

    value:boolean
    title:string
}

export const Button: React.FC<TypeButton> = ({callback,value,title}) => {

    const OnClickHandler = () => {
       callback()
    }


    return (
        <>
            <button className={s.button} disabled={value} onClick={OnClickHandler}>{title}</button>
        </>
    );
};

