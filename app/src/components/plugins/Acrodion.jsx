import { useState } from "react";

// base acrodion
function BasicAcordion({title="Acordion", body}) {
    const [ expandedAcordion, setExpandedAcordion ] = useState(false);
    return (
        <div className="acordion" data-expanded={expandedAcordion}>
            <div className="acordion__header">
                <button type="button" className="acordion__toggler" data-expanded={expandedAcordion} onClick={() => {
                    if (expandedAcordion) {
                        setExpandedAcordion(false);
                    }
                    else {
                        setExpandedAcordion(true);
                    }
                }}>
                    <span>{title}</span>
                    <i className="icofont-caret-down ms-1"></i>
                </button>
            </div>
            <div className="acordion__body">
                {body}
            </div>
        </div>
    );
}

export { BasicAcordion };