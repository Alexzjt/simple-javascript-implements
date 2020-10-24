function _flat(array) {
    return array.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return pre.concat(_flat(cur));
        } else {
            return [...pre, cur];
        }
    }, []);
}

console.log(_flat([[[[[[[1]]]]], [[[[[[[[[[[2]]]]]]]]]]]]]));
