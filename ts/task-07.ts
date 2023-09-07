type NestedObjectValue =
  | number
  | string
  | NestedObjectSevenTask
  | number[]
  | string[];

interface NestedObjectSevenTask {
  [key: string]: NestedObjectValue;
}

const obj: NestedObjectSevenTask = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};

const mapObject = (
  obj: NestedObjectSevenTask,
  currentRoute: string = ""
): NestedObjectSevenTask => {
  const newObj: NestedObjectSevenTask = {};

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      const nestedObjectSevenTask = mapObject(
        value as NestedObject,
        currentRoute ? `${currentRoute}/${key}` : key
      );
      Object.assign(newObj, nestedObjectSevenTask);
    } else {
      newObj[currentRoute ? `${currentRoute}/${key}` : key] = value;
    }
  }

  return newObj;
};

const resultSevenTask = mapObject(obj);
console.log(resultSevenTask);
