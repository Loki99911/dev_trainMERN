const objectToArray = (obj) => {
  const newArr = [];
  const keys = Object.keys(obj);

  for (const key of keys) {
    if (typeof obj.key === "object") {
      newArr.push([key, objectToArray(obj.key)]);
    } else {
      newArr.push([key, obj[key]]);
    }
  }
  return newArr;
};

const result = objectToArray({
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
    test: {
      a: 5,
      b: 6,
    },
  },
});
console.log(result);

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]
