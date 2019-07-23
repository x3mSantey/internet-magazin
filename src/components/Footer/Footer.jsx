import React from 'react';
import s from './Footer.module.css';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <BrowserRouter>
            <div className={s.conteiner}>
                <div className={s.block1}>
                    <div className={s.logo}>logo</div>
                    <input className={s.search} type='search' placeholder='Search on the site'></input>
                    <p className={s.copyright}>© 2010–2019, COMPANY - Официальный интернет магазин COMPANY.<br />Использование материалов COMPANY разрешено только с предварительного согласия правообладателей.<br />Все права на фотографии и тексты принадлежат COMPANY.</p>
                </div>
                <div className={s.block2}>
                    <h4>Категория</h4>
                    <div className={s.list}>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                    </div>
                </div>
                <div className={s.block3}>
                    <h4>Категория</h4>
                    <div className={s.list}>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                        <NavLink to='#' className={s.category}>Подкатегория</NavLink>
                    </div>
                </div>
                <div className={s.block4}>
                    <div className={s.contacts}>
                        <h4>Контакты</h4>
                        <div className={s.nomber}>
                            <div className={s.icon_telph}></div>
                            <p>8(800)232-65-23</p>
                        </div>
                        <div className={s.calen}>
                            <div className={s.icon_calen}></div>
                            <p>пн-пт. 12:00 - 20:00</p>
                        </div>
                        <div className={s.mail}>
                            <div className={s.icon_mail}></div>
                            <p>mail@mail.ru</p>
                        </div>
                        <div className={s.followus}>
                            <p>Следите за нами:</p>
                            <a href='https://www.instagram.com' id={s.inst} target='_blank'>
                                <div className={s.inst}></div>
                            </a>
                            <a href='https://vk.com/feed' id={s.vk} target='_blank'>
                                <div className={s.vk}></div>
                            </a>
                        </div>
                    </div>
                </div>






            </div>
        </BrowserRouter>
    )
}

export default Footer;