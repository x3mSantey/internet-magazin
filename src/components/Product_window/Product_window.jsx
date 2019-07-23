import React from 'react';
import s from './Product_window.module.css';

const Product_window = () => {

    return (
        <div className={s.item}>
            <div className={s.img}></div>
            <h5>Name of item</h5>
            <div className={s.dash}></div>
            <div className={s.price}>3 542 RUB</div>
        </div>
    )
}

export default Product_window;