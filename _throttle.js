function _throttle(fn, wait) {
    let timerId = null;
    return function () {
        if (!timerId) {
            timerId = setTimeout(fn.bind(this), wait);
        }
    }
}

function _throttle1(fn, wait) {
    let pre = Date.now();
    return function () {
        let now = Date.now();
        if (now - pre > wait) {
            fn.apply(this);
        }
    }
}
