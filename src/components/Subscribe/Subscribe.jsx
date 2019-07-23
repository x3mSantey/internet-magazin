import React from 'react';
import s from './Subscribe.module.css';
import Button_send from '../Button_send/Button_send';

const Subscribe = () => {
    
    return (
        <div className={s.conteiner}>
            <div className={s.block}>
                <div className={s.logo}></div>
                <h4 className={s.main_text}>ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ, ЧТОБЫ ПОЛУЧАТЬ ИНФОРМАЦИЮ О НОВОСТЯХ И АКЦИЯХ</h4>
                <div className={s.text}>
                    <input className={s.email} type='email' placeholder='Введите ваш email'></input>
                </div>
                <div className={s.button}>
                    <Button_send name='отправить'/>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;