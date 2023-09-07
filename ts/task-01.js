function deepEqual(objA, objB) {
  // Сначала проверяем на равенство по ссылке (для оптимизации)
  if (objA === objB) {
    return true;
  }

  // Проверяем типы объектов
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null 
  ) {
    return false;
  }

  // Получаем ключи объектов
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // Проверяем количество ключей
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Проверяем каждый ключ и его соответствующее значение рекурсивно
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual({ name: "test" }, { name: "test" }));
console.log(deepEqual({ name: "test" }, { name: "test1" }));
console.log(
  deepEqual(
    { name: "test", data: { value: 1 } },
    { name: "test", data: { value: 2 } }
  )
);
console.log(deepEqual({ name: "test" }, { name: "test", age: 10 }));
