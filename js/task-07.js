const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};

const mapObject = (obj, parentKey = "") => {
  const newObj = {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      const nestedObject = mapObject(
        obj[key],
        parentKey ? `${parentKey}/${key}` : key
      );
      Object.assign(newObj, nestedObject);
    } else {
      newObj[parentKey ? `${parentKey}/${key}` : key] = obj[key];
    }
  }

  return newObj;
};

const result = mapObject(obj);
console.log(result);
// Outputs: {
//   'a/b/c': 12,
//   'a/b/d': 'Hello World',
//   'a/e': [1,2,3]
// }
