import React from 'react';
import { useState } from 'react';

import logo from '../../assets/imgs/logo/base-logo.svg';
import nav from './Header.nav.items';

export default function Header() {
    const [burgerExpanded, setBurgerExpanded] = useState(false);
    return (
        <header className="header">
            <div className="container header__container">

                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>

                <nav className="header__nav" data-expanded={burgerExpanded} onClick={() => setBurgerExpanded(false)}>
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

                <button className='btn btn-burger' onClick={() => { 
                    if (burgerExpanded) { setBurgerExpanded(false); }
                    else {
                        setBurgerExpanded(true);
                    } 
                }} data-expanded={burgerExpanded}> 
                    <span></span> 
                    <span></span> 
                </button>
            </div>
        </header>
    );
}