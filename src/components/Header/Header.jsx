import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
            <div className={s.conteiner}>
                <div className={s.block1}>
                    <div className={s.logo}>Logotype</div>
                    <div className={s.nav}>
                        <div className={s.item}>
                            <NavLink to='/main' className={s.item}>О магазине</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to='/wares' className={s.item}>Изделия</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to='#' className={s.item}>Контакты</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to='#' className={s.item}>Частые вопросы</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to='#' className={s.item}>Доставка</NavLink>
                        </div>
                    </div>
                    <div className={s.info}>
                        <p className={s.ras}>пн-пт. 12:00 - 20:00</p>
                        <p className={s.numb}>8(800)555-35-35</p>
                    </div>
                </div>
                <div className={s.block2}>
                    <div className={s.categories}>
                        <NavLink to='#' className={s.category}>category one</NavLink>
                        <NavLink to='#' className={s.category}>category two</NavLink>
                        <NavLink to='#' className={s.category}>category three</NavLink>
                        <NavLink to='#' className={s.category}>category four</NavLink>
                    </div>
                </div>
            </div>
    )
}

export default Header;