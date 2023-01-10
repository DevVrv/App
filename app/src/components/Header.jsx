import React from 'react';
import { useState } from 'react';
import { toggler } from '../tools/handlerTools'
import Rhomb from './Rhombs';

// Header component
export default function Header() {

    const [burgerActive, setBurgerActive] = useState(false)

    return (
        <header className="header">
            <div className="container header__container">
                
                <div className="header__logo">
                    <h2>Visp</h2>
                </div>
                
                <button className='btn-burger' data-expanded={burgerActive} onClick={() => {
                    toggler(burgerActive, setBurgerActive)
                }}></button>
                
                <button className='btn-draft'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> 
                    Describe Draft
                </button>
            </div>

            <div className="burger" data-expanded={burgerActive}>
                <div className="burger__preview">
                    <div className="burger__preview-item">
                        <h3 className="h3">All the best things are simple</h3>
                    </div>
                    <div className="burger__preview-item">
                        <h3 className="h3">Reliability convenience beauty</h3>
                    </div>
                </div>
                <div className="burger__body">
                    <Rhomb />
                </div>
            </div>

        </header>
    );
}