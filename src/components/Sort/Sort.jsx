import React from 'react';
import s from './Sort.module.css';
import {NavLink} from 'react-router-dom';

const Sort = () => {

    return(
        <div className={s.conteiner}>
            <div className={s.block}>
                <NavLink to='#' className={s.category}>category one</NavLink>
            </div>
            <div className={s.block}>
                <NavLink to='#' className={s.category}>category two</NavLink>
            </div>
            <div className={s.block}>
                <NavLink to='#' className={s.category}>category three</NavLink>
            </div>
            <div className={s.block}>
                <NavLink to='#' className={s.category}>category four</NavLink>
            </div>
        </div>
    )
}

export default Sort;