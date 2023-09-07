"use strict";
function add(x) {
    const innerAdd = (y) => add(x + y);
    const result = Object.assign(innerAdd, { valueOf: () => x });
    return result;
}
console.log(Number(add(1)(2)));
console.log(Number(add(1)(2)(5)));
console.log(Number(add(1)(2)(-3)(4)));
console.log(Number(add(1)(2)(3)(4)(-5)));
//# sourceMappingURL=task-09.js.map