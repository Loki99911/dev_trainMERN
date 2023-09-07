"use strict";
const chunkArray = (arr, length) => {
    const newArr = [...arr];
    return {
        next: () => {
            if (newArr.length === 0) {
                return { value: undefined, done: true };
            }
            else {
                const delArr = newArr.splice(0, length);
                return { value: delArr, done: false };
            }
        },
    };
};
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//# sourceMappingURL=task-02.js.map