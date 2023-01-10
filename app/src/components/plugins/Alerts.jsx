import React from "react"

function AlertSmal({ title, message, type = "info", x = 'end', y = 'end' }) {

    return (
        <div className="alert-smal" data-alert-type={type} data-alert-x={x} data-alert-y={y}>
            <div className="alert-smal__header">
                <h4 className="h4">{title}</h4>
                <button type="button" className="btn btn-exit" onClick={() => {
                // -- click function
                }}></button>
            </div>
            <div className="alert-smal__message">
                {message}
            </div>
        </div>
    )
}

export { AlertSmal }