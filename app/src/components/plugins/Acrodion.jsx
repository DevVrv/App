import { useState } from "react"
import { toggler } from "../../tools/handlerTools"
import React from "react"
import { TfiAngleDown } from "react-icons/tfi"

// base acrodion
function BasicAcordion(props) {
    const [ expanded, setExpanded ] = useState(false)
    return (
        <div className="acordion" data-expanded={expanded}>
            <div className="acordion__header">
                <button type="button" className="acordion__toggler" data-expanded={expanded} onClick={() => toggler(expanded, setExpanded)}>
                    <span>{props.title}</span>
                    <i> <TfiAngleDown /> </i>
                </button>
            </div>
            <div className="acordion__body">
                {props.body}
            </div>
        </div>
    )
}

BasicAcordion.defaultProps = {
    title: 'Title',
    body: 'Body'
}

export { BasicAcordion }