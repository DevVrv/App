function toggler(bool, handle) {
    if (bool === true) {
        handle(false);
    }
    else if (bool === false) {
        handle(true);
    }
}

export { toggler };