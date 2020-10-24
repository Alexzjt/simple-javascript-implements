Function.prototype._call = function (thisArg, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('call must use for function');
    }
    thisArg = thisArg || window;
    var symbol = Symbol('fn');
    thisArg[symbol] = this;
    var result = thisArg[symbol](...args);
    delete thisArg[symbol];
    return result;
};
