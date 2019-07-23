import React from 'react';
import s from './Mainsheet.module.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Product_window from '../../Product_window/Product_window';

const Mainsheet = () => {

    return (
        <BrowserRouter>
            <div className={s.conteiner}>
                <div className={s.block1}>
                    <NavLink to='#'>
                        <div className={s.ware1}></div>
                    </NavLink>
                </div>
                <div className={s.block2}>
                    <NavLink to='#'>
                        <div className={s.ware2}></div>
                    </NavLink>
                </div>
                <div className={s.block3}>
                    <div className={s.random1}>
                        <Product_window />
                    </div>
                </div>
                <div className={s.block4}>
                    <NavLink to='#'>
                        <div className={s.ware3}></div>
                    </NavLink>
                </div>
                <div className={s.block5}>
                    <div className={s.random2}>
                        <Product_window />
                    </div>
                </div>
                <div className={s.block6}>
                    можно видео записать смонтировать и вставить
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Mainsheet;