// basic input field
function Field({id, name, desc, placeholder, type='text', disabled=false}) {
    if (desc) {
        desc = <span className="color-fade"> {desc} </span>
    }
    return (
        <div className="field-container">
            {desc}
            <div className="field-wrapper">
                <input type={type} id={id} name={name} className="field" placeholder={placeholder}  disabled={disabled} autoComplete="true"/>
            </div>
        </div>
    );
}

// basic area field
function Area({id, name, desc, placeholder}) {
    return (
        <div className="field-container">
            {desc}
            <div className="field-wrapper">
                <textarea id={id} name={name} placeholder={placeholder}></textarea>
            </div>
        </div>
    );
}

// basic search field
function Search({id, name, desc, placeholder="Search", type='text', disabled=false}) {
    if (desc) {
        desc = <span className="color-fade"> {desc} </span>
    }
    return (
        <div className="search-container">
            {desc}
            <div className="search-wrapper">
                <input type="search" id={id} name={name} className="field search-field" placeholder={placeholder} disabled={disabled} autoComplete="true"/>
                <button type="submit" className="btn btn-search">
                    <i class="icofont-search"></i>
                </button>
            </div>
        </div>
    );
}

// basic checkbox
function Checkbox({id, name, desc, disabled=false}) {
    let icon;
    if (disabled) {
        icon = <i className="icofont-lock"></i>
    }
    else {
        icon = <i className="icofont-check"></i>
    }
    return (
        <div className="checkbox">
            <input type="checkbox" id={id} name={name} className="d-none" disabled={disabled} autoComplete="true"/>
            <label htmlFor={id}>{icon}</label>
            <span className="color-fade">{desc}</span>
        </div>
    );
}

// basic readio
function Radio({id, name, desc, value, disabled=false}) {
    let icon;
    if (disabled) {
        icon = <i className="icofont-lock"></i>
    }
    else {
        icon = ''
    }
    return (
        <div className="radio">
            <input type="radio" id={id} name={name} className="d-none" disabled={disabled} value={value} autoComplete="true"/>
            <label htmlFor={id}>{icon}</label>
            <span className="color-fade">{desc}</span>
        </div>
    );
}

export {Field, Area, Search, Checkbox, Radio}