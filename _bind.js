Function.prototype._bind = function (thisArg, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('call must use for function');
    }
    var self = this;
    var fnBound = function () {
        self.apply(this instanceof self ? this: thisArg, args.concat(arguments));
    };
    fnBound.prototype = Object.create(self.prototype);
    return fnBound;
};
