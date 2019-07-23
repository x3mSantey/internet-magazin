import React from 'react';
import s from './Main.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom'
import Slider from '../Slider/Slider';
import Img from './Img/Img';
import Mainsheet from './Mainsheet/Mainsheet';
import Aboutus from '../Aboutus/Aboutus';
import Button_send from '../Button_send/Button_send'

const Main = () => {

    return (
        <BrowserRouter>
            <div className={s.main}>
                <Img />
                <Mainsheet />
                <div className={s.band}></div>
                <div className={s.slider}>
                    <div className={s.all_wares}>
                        <h4>Look all wares</h4>
                        <Button_send name='look all'/>
                    </div>
                    <Slider />
                </div>
                <Aboutus />
            </div>
        </BrowserRouter>

    )
}

export default Main;