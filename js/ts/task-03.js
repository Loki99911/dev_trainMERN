"use strict";
const f1 = (cb) => {
    cb(1);
};
const f2 = (a, cb) => {
    cb(a);
};
const f3 = (a, b, cb) => {
    setTimeout(() => cb([a, b]), 1000);
};
const bulkRun = (arrOfFn) => {
    return Promise.all(arrOfFn.map(([fn, args]) => {
        return new Promise((resolve) => {
            fn(...args, resolve);
        });
    }));
};
bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]],
]).then(console.log);
//# sourceMappingURL=task-03.js.map