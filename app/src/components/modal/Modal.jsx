import React from "react";

export default function Modal({active, setActive, props}) {
    return (
        <div className="modal" data-modal-state={active ? 'show': 'hide'} onClick={() => setActive(false)}>
            <div className="modal__container" onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <h2 className="modal__title">
                        {props.title}
                    </h2>
                    <button type="button" className="modal__exit" onClick={() => setActive(false)}></button>
                </div>
                <div className="modal__body">
                    {props.body}
                </div>
                <div className="modal__footer"></div>
            </div>
        </div>
    );
}

// Props Example
// const modalProps = {
//     title: "",
//     body: ""
// }

// Toggler Example
// <button type='button' className='btn header__auth-btn' onClick={() => setModalActive(true)}>Авторизация</button>