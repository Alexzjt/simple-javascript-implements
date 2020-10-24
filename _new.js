function _new(MyClass, ...args) {
    var obj = Object.create(MyClass.prototype);
    let result = MyClass.apply(obj, ...args);
    return Object.prototype.toString.call(result) === '[Object, Object]' ? result: obj;
}
