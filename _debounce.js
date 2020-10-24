function _debounce(fn, wait) {
    let timerId = null;
    return function () {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(fn.bind(this), wait);
    }
}
