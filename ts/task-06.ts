function createNotificationException(): Error {
  return new Error("NotificationException");
}

function createErrorException(): Error {
  return new Error("ErrorException");
}

function primitiveMultiply(a: number, b: number): number | Error {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    return createErrorException();
  } else {
    return createNotificationException();
  }
}

function reliableMultiply(a: number, b: number): number {
  while (true) {
    const result = primitiveMultiply(a, b);
    if (result instanceof Error) {
      if (result.message === "NotificationException") {
        continue;
      } else {
        throw result;
      }
    } else {
      return result;
    }
  }
}

console.log(reliableMultiply(8, 8));
