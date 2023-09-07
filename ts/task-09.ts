type AddFunction = (x: number) => AddFunction & number;

function add(x: number): AddFunction {
  const innerAdd = (y: number): AddFunction => add(x + y);
  const result = Object.assign(innerAdd, { valueOf: () => x });
  return result as unknown as AddFunction;
}

console.log(Number(add(1)(2))); // == 3
console.log(Number(add(1)(2)(5))); // == 8
console.log(Number(add(1)(2)(-3)(4))); // == 4
console.log(Number(add(1)(2)(3)(4)(-5))); // == 5