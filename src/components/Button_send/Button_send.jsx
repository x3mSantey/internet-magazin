import React from 'react';
import s from './Button_send.module.css';

const Button_send = (props) => {

    return (
        <div>
            <button className={s.button}>{props.name}</button>
        </div>
    )
}

export default Button_send;