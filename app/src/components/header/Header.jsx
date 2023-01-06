import React from 'react';
import logo from '../../assets/imgs/logo/base-logo.svg'
import nav from './Header.nav.items'
import Modal from '../modal/Modal';
import { useState } from 'react';

const modalProps = {
    title: 'Modal Title',
    body: 
    <form action='#' method='POST' className="auth__form" onSubmit={e => { e.preventDefault() }}>
        <input type="text" />
        <input type="password" />
    </form>
}
export default function Header() {
    const [modalActive, setModalActive] = useState(false) 
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>

                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {nav.map((item, index) => {
                            return (
                            <li className="header__nav-item" key={index}>
                                <a href={item.url} className="link header__nav-link">
                                    {item.icon}
                                    <span>{item.title}</span>    
                                </a>
                            </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="header__auth">
                    <button type='button' className='btn header__auth-btn' onClick={() => setModalActive(true)}>Авторизация</button>
                    <button type='button' className='btn header__auth-btn'>Регистрация</button>
                </div>
            </div>
            
            <Modal active={modalActive} setActive={setModalActive} props={modalProps}/>
        </header>
    );

}