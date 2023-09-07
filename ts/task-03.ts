type Callback<T> = (value: T) => void;

const f1 = (cb: Callback<number>) => {
  cb(1);
};

const f2 = (a: number, cb: Callback<number>) => {
  cb(a);
};

const f3 = (a: number, b: number, cb: Callback<[number, number]>) => {
  setTimeout(() => cb([a, b]), 1000);
};

const bulkRun = (arrOfFn: Array<[Function, any[]]>): Promise<any[]> => {
  return Promise.all(
    arrOfFn.map(([fn, args]) => {
      return new Promise<unknown>((resolve) => {
        fn(...args, resolve);
      });
    })
  ) as Promise<any[]>;
};

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
