import React from 'react';
import s from './Aboutus.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom'

const Aboutus = () => {

    return (
        <div className={s.conteiner}>
            <div className={s.block1}>
                <div className={s.big_img1}></div>
                <div className={s.small_img1}></div>
            </div>
            <div className={s.big_logo}>Place for logtype(in .pnf format)</div>
            <div className={s.text_block}>
                <h4>Name magazin</h4>
                <p>Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company Some comment about company</p>
            </div>
            <div className={s.block2}>
                <div className={s.big_img2}></div>
                <div className={s.small_img2}></div>
            </div>

        </div>
    )
}

export default Aboutus;