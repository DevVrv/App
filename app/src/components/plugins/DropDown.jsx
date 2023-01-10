import { useState } from "react"
import { toggler } from "../../tools/handlerTools"

function DropDown({ title, body, type = "hover" }) {
    const [dropDownExpanded, setDropDownExpanded] = useState(false)

    return (
        <div className={`dropdown dropdown-${type}`} data-expanded={dropDownExpanded}>
            <button type="button" className="dropdown__title" data-expanded={dropDownExpanded} onClick={() => toggler(dropDownExpanded, setDropDownExpanded)}>
                <span>{title}</span>
            </button>
            <div className="dropdown__menu">
                {body}
            </div>
        </div>
    )
}

export { DropDown }