var arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];

const arrayToObject = (arr) => {
  const newObj = {};
  for (const el of arr) {
    if (Array.isArray(el[1])) {
      newObj[el[0]] = arrayToObject(el[1]);
    } else {
      newObj[el[0]] = el[1];
    }
  }
  return newObj;
};

const result = arrayToObject(arr);
console.log(result);

