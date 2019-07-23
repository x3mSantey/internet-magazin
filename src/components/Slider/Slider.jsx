import React from 'react';
import s from './Slider.module.css';
import Product_window from '../Product_window/Product_window';

const Slider = () => {

    return (
        <div className={s.conteiner}>
             <div className={s.block_items}>
                <Product_window />
                <Product_window />
                <Product_window />
                <Product_window />
            </div>
            <div className={s.arrow_left}>
                <div className={s.left_img}></div>
            </div>
            <div className={s.arrow_right}>
                <div className={s.right_img}></div>
            </div>
        </div>
    )
}

export default Slider;