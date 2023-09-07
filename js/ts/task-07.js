"use strict";
const obj = {
    a: {
        b: {
            c: 12,
            d: "Hello World",
        },
        e: [1, 2, 3],
    },
};
const mapObject = (obj, currentRoute = "") => {
    const newObj = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "object" && !Array.isArray(value) && value !== null) {
            const nestedObjectSevenTask = mapObject(value, currentRoute ? `${currentRoute}/${key}` : key);
            Object.assign(newObj, nestedObjectSevenTask);
        }
        else {
            newObj[currentRoute ? `${currentRoute}/${key}` : key] = value;
        }
    }
    return newObj;
};
const resultSevenTask = mapObject(obj);
console.log(resultSevenTask);
//# sourceMappingURL=task-07.js.map