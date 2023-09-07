"use strict";
const arr = [
    ["name", "developer"],
    ["age", 5],
    [
        "skills",
        {
            html: 4,
            css: 5,
            js: 5,
        },
    ],
];
const arrayToObject = (arr) => {
    const newObj = {};
    for (const [key, value] of arr) {
        if (typeof value === "object" && !Array.isArray(value)) {
            newObj[key] = arrayToObject(Object.entries(value));
        }
        else {
            newObj[key] = value;
        }
    }
    return newObj;
};
const resultFourTask = arrayToObject(arr);
console.log(resultFourTask);
//# sourceMappingURL=task-04.js.map