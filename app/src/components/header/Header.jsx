import React from 'react';
import { useState } from 'react';

import logo from '../../assets/imgs/logo/base-logo.svg';
import nav from './Header.nav.items';

import { DropDown } from '../plugins/DropDown';

import { AlertSmal } from '../plugins/Alerts';

const p = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, fugit aperiam ipsa quis quisquam nihil est enim dignissimos esse quas? Quo illum, omnis natus asperiores blanditiis doloribus aspernatur. Possimus, beatae!</p>

export default function Header() {
    const [burgerExpanded, setBurgerExpanded] = useState(false);
    return (
        <header className="header">
            <div className="container header__container">

                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>

                <AlertSmal title="Message title" message={p} type='danger'/>

                <DropDown title={'Show more'} body={p}/>

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