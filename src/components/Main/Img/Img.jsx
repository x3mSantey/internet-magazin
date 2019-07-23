import React from 'react';
import s from './Img.module.css';

const Img = () => {

    return (
    <div className={s.conteiner}>
        <div className={s.image_left}></div>
        <div className={s.image_center}></div>
        <div className={s.image_right}></div>
    </div>
        
    )
}

export default Img;