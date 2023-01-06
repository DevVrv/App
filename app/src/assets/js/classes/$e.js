'use strict';

// ========== DOCS ========== //

// ver 0.2

// ========================= //


// -- Control Class
class Control {

    constructor(selector, parent = document, kwargs = {}) {
        if (selector) {
            this.parent = parent;
            this.selector = selector;
            this.elems = this.find(this.selector, this.parent);
            this.kwargs = kwargs;
        }        
    }

    // -- Base Methods -- //

    _logger(info = this) {
        console.log(info);
        return this;
    }
    _arr(value) {
        if (!Array.isArray(value)) {
            return [value];
        }
        else {
            return value;
        }
    }
    find(selector, parent = document) {
        // get parent arr
        if (!parent.elems) {
            parent = this._arr(parent);
        }
        else {
            this.parent = parent.elems;
            parent = this.parent;
        }
        // find elems
        const nodes = [];
        parent.map(p => {
            nodes.push(...p.querySelectorAll(selector));
        });
        return nodes;
    }
    event(params) {

        // collect event params
        this._event = {
            type: params.type || 'click',
            elems: params.elems || this.elems,
            handler: params.handler
        };
        this._event.elems = this._arr(this._event.elems);

        // add event handler
        this._event.elems.map((el, index) => {
            el.addEventListener(this._event.type, (e) => {
                this._event.index = index;
                this._event.e = e;
                this._event.target = el;
                this._event.handler(el, index, e);
                if (this.kwargs && this.kwargs.log) {
                    this._logger(this);
                }
            });
        });

        // returning
        return this;

    }

    // -- Modify Elements -- //

    class(params) {
        // collect class params
        this._class = {
            name: params.name || 'active',
            mode: params.mode || 'add' || 'toggle' || 'remove' || 'has',
            elems: params.elems || this.elems,
            unique: params.unique || null,
            fullMatch: params.fullMatch || false
        };
        this._class.elems = this._arr(this._class.elems);
        if (this._class.mode == 'has') {
            this._class.has = [];
        }

        // action
        this._class.elems.map(el => {
            switch (this._class.mode) {
                case 'add':
                    if (this._class.unique && this._class.unique === el || !this._class.unique) {
                        el.classList.add(this._class.name);
                    }
                    else if (this._class.unique && this._class.unique !== el) {
                        el.classList.remove(this._class.name);
                    }
                    break;
                case 'remove':
                    el.classList.remove(this._class.name);
                    break;
                case 'toggle':
                    if (this._class.unique && this._class.unique === el || !this._class.unique) {
                        el.classList.toggle(this._class.name);
                    }
                    else if (this._class.unique && this._class.unique !== el) {
                        el.classList.remove(this._class.name);
                    }
                    break;
                case 'has':
                    this._class.has.push(el.classList.contains(this._class.name));
                    break;
            }
        });

        // returning
        if (this._class.mode == 'has') {
            if (this._class.fullMatch && this._class.has.includes(false) ) {
                return false;
            }
            else if (this._class.fullMatch && !this._class.has.includes(false)) {
                return true;
            }
            else if (!this._class.fullMatch) {
                return this._class.has;
            }
        }
        else {
            return this;
        } 
    }
    attr(params) {
        // collect class params
        this._attr = {
            name: params.name || 'data-attr',
            mode: params.mode || 'add' || 'remove' || 'toggle' || 'state' || 'has' || 'get',
            value: params.value || null,
            elems: params.elems || this.elems,
            unique: params.unique || null,
            fullMatch: params.fullMatch || false,
            direction: params.direction || 'next' || 'prev'
        };
        this._attr.elems = this._arr(this._attr.elems);

        if (this._attr.mode == 'has') {
            this._attr.has = [];
        }
        else if (this._attr.mode == 'get') {
            this._attr.get = [];
        }

        // action
        this._attr.elems.map(el => {
            switch (this._attr.mode) {
                case 'add':
                    if (this._attr.unique && this._attr.unique === el || !this._attr.unique) {
                        el.setAttribute(this._attr.name, this._attr.value);
                    }
                    else if (this._attr.unique && this._attr.unique !== el) {
                        el.removeAttribute(this._attr.name);
                    }
                    break;
                case 'remove':
                    el.removeAttribute(this._attr.name);
                    break;
                case 'toggle':
                    if (this._attr.unique && this._attr.unique === el || !this._attr.unique) {
                        if (!el.hasAttribute(this._attr.name)) {
                            el.setAttribute(this._attr.name, this._attr.value);
                        }
                        else {
                            el.removeAttribute(this._attr.name, this._attr.value);
                        }
                    }
                    else if (this._attr.unique && this._attr.unique !== el) {
                        el.removeAttribute(this._attr.name);
                    }
                    break;
                case 'state':
                    let currentValue = el.getAttribute(this._attr.name);
                    let currentIndex, nextValue;
                    if (!currentValue) {
                        nextValue = this._attr.value[0];
                    }
                    else {
                        // try to parse
                        try {
                            currentValue = JSON.parse(currentValue);    
                        } 
                        catch (error) {
                            currentValue = currentValue;
                        }
                        currentIndex = this._attr.value.indexOf(currentValue);
                        
                        // state mode
                        if (this._attr.direction == 'next') {
                            nextValue = this._attr.value[currentIndex + 1];
                            if (nextValue == undefined) { nextValue = this._attr.value[0]; }
                        }
                        else if (this._attr.direction == 'prev') {
                            nextValue = this._attr.value[currentIndex - 1];
                            if (nextValue == undefined) { nextValue = this._attr.value[this._attr.value.length - 1]; }
                        }

                    }
                    // set value
                    el.setAttribute(this._attr.name, nextValue);
                    this._attr.current = nextValue;
                    break;
                case 'has':
                    this._attr.has.push(el.hasAttribute(this._attr.name));
                    break;
                case 'get':
                    this._attr.get.push(el.getAttribute(this._attr.name));
                    break;
            }
        });

        // returning
        if (this._attr.mode == 'has') {
            if (this._attr.fullMatch && this._attr.has.includes(false) ) {
                return false;
            }
            else if (this._attr.fullMatch && !this._attr.has.includes(false)) {
                return true;
            }
            else if (!this._attr.fullMatch) {
                if (this._attr.has.length == 1) {
                    return this._attr.has[0];
                }
                else {
                    return this._attr.has;
                }
            }
        }
        else if (this._attr.mode == 'get') {
            if (this._attr.get.length == 1) {
                return this._attr.get[0];
            }
            else {
                return this._attr.get;
            }
        }
        else {
            return this;
        } 
    }
    html(params) {
        // collect html params
        this._html = {
            mode: params.mode || 'set' || 'add' || 'get',
            value: params.value || '',
            elems: params.elems || this.elems
        };
        this._html.elems = this._arr(this._html.elems);
        if (this._html.mode == 'get') {
            this._html.get = [];
        }

        // action
        this._html.elems.map(el => {
            switch (this._html.mode) {
                case 'set':
                    el.innerHTML = this._html.value;
                    break;
                case 'add':
                    el.innerHTML += this._html.value;
                    break;
                case 'get':
                    this._html.get.push(el.innerHTML.replace(/ /g, ''));
                    break;
            }
        });
        
        // returning
        if (this._html.mode == 'get') {
            return this._html.get;
        }
        else {
            return this;
        }
    }
    insert(params) {
        // collect insert params
        this._insert = {
            pos: params.pos || 'afterbegin',
            elems: params.elems || this.elems,
            value: params.value || '',
            mode: params.mode || 'html' || 'element' || 'text'
        };
        this._insert.elems = this._arr(this._insert.elems);

        // action
        this._insert.elems.map(el => {
            if (this._insert.mode == 'html') {
                el.insertAdjacentHTML(this._html.pos, this._html.value);
            }
            else if (this._insert.mode == 'element') {
                el.insertAdjacentElement(this._html.pos, this._html.value);
            }
            else if (this._insert.mode == 'text') {
                el.insertAdjacentText(this._html.pos, this._html.value);
            }
        }); 
    }
    text(params) {
        // collect text params
        this._text = {
            mode: params.mode || 'add' || 'set' || 'get',
            value: params.value || '',
            elems: params.elems || this.elems
        };
        this._text.elems = this._arr(this._text.elems);
        if (this._text.mode == 'get') {
            this._text.get = [];
        }
        // action
        this._text.elems.map(el => {
            switch (this._text.mode) {
                case 'add':
                    el.textContent += this._text.value;
                    break;
                case 'set':
                    el.textContent = this._text.value;
                    break;
                case 'get':
                    this._text.get.push(el.textContent);
                    break;
            }
        });

        // returning
        if (this._text.mode == 'get') {
            return this._text.get;
        }
        else {
            return this;
        }
    }
    css(params) {

        // collect css data
        this._css = {
            elems: params.elems || this.elems,
            values: params.values || '',
            mode: params.mode || 'add'
        }
        this._css.elems = this._arr(this._css.elems);

        // action
        this._css.elems.map((el, i) => {
            if (Array.isArray(this._css.values) && i < this._css.values.length) {
                if (this._css.mode == 'set') {
                    el.style.cssText = this._css.values[i];
                }
                else if (this._css.mode == 'add') {
                    el.style.cssText += this._css.values[i];
                }
            }
            else if (!Array.isArray(this._css.values)) {
                if (this._css.mode == 'set') {
                    el.style.cssText = this._css.values;
                }
                else if (this._css.mode == 'add') {
                    el.style.cssText += this._css.values;
                }
            }
        });

        // return
        return this;
    }


    // -- Utils -- //

    timer(len = 1000, handler = Function) {
        this._timer = {
            id: null,
            len: len
        }
        this._timer.id = setTimeout(handler, len);
    }
    interval(len = 1000, handler = Function, options = { tacts: null }) {
        this._interval = {
            id: null,
            len: len,
            tacts: options.tacts,
            currentTact: 0
        };
        this._interval.id = setInterval(() => {
            handler();
            if (options.tacts) {
                this._interval.currentTact += 1;
                if (this._interval.currentTact >= this._interval.tacts) {
                    clearInterval(this._interval.id);
                }
            }
        }, len);
    }
    storage(mode = 'set', params = { key: String, value: null },  options = { path: 'local' || 'session', unique: false,  fullMatch: false }) {

        // create united value
        function collect(storageValues = Array, newValue = Array, unique = false) {

            // parse storage
            try {
                storageValues = JSON.parse(storageValues);    
            } 
            catch (error) {
                storageValues = storageValues;
            }
            if (!Array.isArray(storageValues)) {
                storageValues = [storageValues];
            }

            // check new value
            if (!Array.isArray(newValue)) {
                newValue = [newValue];
            }

            // update value
            let united = [...storageValues, ...newValue];
            if (options && options.unique) {
                united = [...new Set(united)];
            }

            // return result
            return united;

        }

        // check has values
        function has(storageValues = Array, searchable = Array, fullMatch = false) {
            
            // parse storage
            try {
                storageValues = JSON.parse(storageValues);    
            } 
            catch (error) {
                storageValues = storageValues;
            }

            // check searchable
            if (!Array.isArray(searchable)) {
                searchable = [searchable];
            }

            // searching
            let found = [];
            searchable.map(value => {
                found.push(storageValues.includes(value));
            });
            
            // full mathc option
            if (fullMatch) {
                if (found.includes(false)) {
                    found = false;
                }
                else {
                    found = true;
                }
            }
            return found;
        }

        // remove values
        function remove(storageValues = Array, searchable = Array) {
            // parse storage
            try {
                storageValues = JSON.parse(storageValues);    
            } 
            catch (error) {
                storageValues = storageValues;
            }

            // check searchable
            if (!Array.isArray(searchable)) {
                searchable = [searchable];
            }

            // removing
            let result = [];
            searchable.map(search => {
                result = storageValues.filter(value => { return value !== search; });
            });

            return result;
        }

        // collect storage data
        this._storage = {
            key: params.key,
            mode: mode,
            value: params.value || [],
            path: options.path || 'local',
            unique: options.unique || false,
        };

        // create storage object
        let storage;
        if (this._storage.path == 'local') {
            storage = localStorage;
        }
        else if (this._storage.path == 'session') {
            storage = sessionStorage;
        }

        // get storage item
        const storageValues = storage.getItem(params.key);
        if (mode == 'get' && storageValues == null) { return null; }
        const paramsValues = params.value;
        let collection = [];
        let result;

        // action
        switch (mode) {
            case 'set':
                collection = collect([], paramsValues, options.unique || false);
                storage.setItem(params.key, JSON.stringify(collection));
                break;
            case 'add':
                collection = collect(storageValues, paramsValues, options.unique || false);
                storage.setItem(params.key, JSON.stringify(collection));
                break;
            case 'has':
                result = has(storageValues, paramsValues, options.fullMatch || false);
                break;
            case 'get':
                try {
                    result = JSON.parse(storageValues);    
                } 
                catch (error) {
                    result = storageValues;
                }
                break;
            case 'remove':
                const cleanedValues = remove(storageValues, paramsValues);
                storage.setItem(params.key, JSON.stringify(cleanedValues));
                break;
            case 'delete':
                storage.removeItem(params.key);
                break;
            case 'clear':
                storage.clear();
        }

        // return
        if (result != undefined) {
            return result;
        }
        else {
            return this;
        }
    }
    DOM(func = Function) {
        document.addEventListener('DOMContentLoaded', func());
    }

}

// -- Init Control
function $(selector, parent = document, kwargs = {}) {

    return new Control(selector, parent, kwargs);

}



