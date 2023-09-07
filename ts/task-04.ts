interface NestedObject {
  [key: string]: NestedObject | number | string;
}

const arr: [string, NestedObject | number | string][] = [
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

const arrayToObject = (
  arr: [string, NestedObject | number | string][]
): NestedObject => {
  const newObj: NestedObject = {};
  for (const [key, value] of arr) {
    if (typeof value === "object" && !Array.isArray(value)) {
      newObj[key] = arrayToObject(Object.entries(value as NestedObject));
    } else {
      newObj[key] = value as number | string;
    }
  }
  return newObj;
};

const resultFourTask = arrayToObject(arr);
console.log(resultFourTask);
