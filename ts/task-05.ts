type NestedArrFiveTaskValue =
  | NestedArrFiveTask
  | number
  | string
  | NestedObjFiveTask;
type NestedArrFiveTask = [string, NestedArrFiveTaskValue] | [];
type NestedObjFiveTask = {
  [key: string]: NestedArrFiveTaskValue;
}

const objectToArray = (obj: NestedObjFiveTask): NestedArrFiveTask[] => {
  const newArr: NestedArrFiveTask[] = [];
  const keys = Object.keys(obj);

  for (const key of keys) {
    if (typeof obj[key] === "object") {
      const secondArr: any = objectToArray(obj[key] as NestedObjFiveTask);
      newArr.push([key, secondArr]);
    } else {
      if (typeof obj[key] === "string" || typeof obj[key] === "number") {
        newArr.push([key, obj[key]]);
      }
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
  },
});
console.log(result);
