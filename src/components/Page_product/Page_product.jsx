import React from 'react';
import s from './Page_product.module.css';
import {NavLink} from 'react-router-dom';

const Page_product = () => {

    return (
        <div className={s.conteiner}>
            <div className={s.block_img}>
                <div className={s.gallery}>
                    <div className={s.up}></div>
                    <div className={s.sideways_img}></div>
                    <div className={s.bigPlan_img}></div>
                    <div className={s.behind_img}></div>
                    <div className={s.front_img}></div>
                    <div className={s.down}></div>
                </div>
                <div className={s.big_img}></div>
            </div>
            <div className={s.information}>
                <h1 className={s.name}>Имя продукта Name the product sdcscdscwwed</h1>
                <div className={s.band}></div>
                <h2 className={s.price}>3 499 RUB</h2>
                <div className={s.lite_band}></div>
                <h4>Описание</h4>
            </div>
        </div>
    )
}

export default Page_product;