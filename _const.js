function _const(key, value) {
    Object.defineProperty(window, key, {
        value,
        writable: false
    })
}
