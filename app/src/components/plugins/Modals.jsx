import React from "react";

// Modal props : { title, body, footer }
function Modal({active, setActive, props}) {
    return (
        <div className="modal" data-modal-state={active ? 'show': 'hide'} onClick={() => setActive(false)}>
            <div className="modal__container" onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <h2 className="modal__title">
                        {props.title}
                    </h2>
                    <button type="button" className="btn-exit" onClick={() => setActive(false)}></button>
                </div>
                <div className="modal__body">
                    {props.body}
                </div>
                {props.footer ? <div className="modal__footer">{props.footer}</div> : '' }
            </div>
        </div>
    );
}

export { Modal };