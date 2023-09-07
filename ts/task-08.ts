function combos(num: number): number[][] {
  const results: number[][] = [];

  function backtrack(
    remaining: number,
    currentCombo: number[],
    start: number
  ): void {
    if (remaining === 0) {
      results.push([...currentCombo]); // Добавляем копию текущей комбинации в результаты
      return;
    }

    for (let i = start; i <= num; i++) {
      if (i <= remaining) {
        currentCombo.push(i); // Добавляем текущее число к текущей комбинации
        backtrack(remaining - i, currentCombo, i);
        currentCombo.pop(); // Удаляем последнее добавленное число, чтобы попробовать другие комбинации
      }
    }
  }

  backtrack(num, [], 1); // Начинаем с 1, так как комбинации начинаются с чисел от 1 до num

  return results;
}

const resultEightTask: number[][] = combos(5);
console.log(resultEightTask);
