import React from 'react';
import s from './Wares.module.css';
import Sort from '../Sort/Sort';
import Product_window from '../Product_window/Product_window';
import {NavLink} from 'react-router-dom';

const Wares = () => {

    return (
        <div className={s.conteiner}>
            <div className={s.sort}>
                <Sort />
            </div>
            <div className={s.products}>
                <h1>Светильники</h1>
                <div className={s.band}></div>
                <div className={s.ware_block}>
                    <NavLink to='/product'>
                        <Product_window />
                    </NavLink>
                    <NavLink to='/product'>
                        <Product_window />
                    </NavLink>
                    <NavLink to='/product'>
                        <Product_window />
                    </NavLink>
                    <NavLink to='/product'>
                        <Product_window />
                    </NavLink>
                    <NavLink to='/product'>
                        <Product_window />
                    </NavLink>
                    <NavLink to='/product'>
                        <Product_window />
                    </NavLink>
                    <NavLink to='/product'>
                        <Product_window />
                    </NavLink>
                    <NavLink to='/product'>
                        <Product_window />
                    </NavLink>
                    <NavLink to='/product'>
                        <Product_window />
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Wares;