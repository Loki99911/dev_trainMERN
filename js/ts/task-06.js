"use strict";
function createNotificationException() {
    return new Error("NotificationException");
}
function createErrorException() {
    return new Error("ErrorException");
}
function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    }
    else if (rand > 0.85) {
        return createErrorException();
    }
    else {
        return createNotificationException();
    }
}
function reliableMultiply(a, b) {
    while (true) {
        const result = primitiveMultiply(a, b);
        if (result instanceof Error) {
            if (result.message === "NotificationException") {
                continue;
            }
            else {
                throw result;
            }
        }
        else {
            return result;
        }
    }
}
console.log(reliableMultiply(8, 8));
//# sourceMappingURL=task-06.js.map