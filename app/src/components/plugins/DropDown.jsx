import { useState } from "react";


function DropDown({title, body, type="hover"}) {
    const [dropDownExpanded, setDropDownExpanded] = useState(false);

    return (
        <div className={`dropdown dropdown-${type}`} data-expanded={dropDownExpanded}>
            <button type="button" className="dropdown__title" data-expanded={dropDownExpanded} onClick={() => {
                if (dropDownExpanded) { setDropDownExpanded(false); }
                else { setDropDownExpanded(true); }
            }}>
                <span>{title}</span>
                <i className="icofont-caret-down ms-1"></i>
            </button>
            <div className="dropdown__menu">
                {body}
            </div>
        </div>
    );
}

export { DropDown };