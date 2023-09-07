"use strict";
function combos(num) {
    const results = [];
    function backtrack(remaining, currentCombo, start) {
        if (remaining === 0) {
            results.push([...currentCombo]);
            return;
        }
        for (let i = start; i <= num; i++) {
            if (i <= remaining) {
                currentCombo.push(i);
                backtrack(remaining - i, currentCombo, i);
                currentCombo.pop();
            }
        }
    }
    backtrack(num, [], 1);
    return results;
}
const resultEightTask = combos(5);
console.log(resultEightTask);
//# sourceMappingURL=task-08.js.map