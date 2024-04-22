export default function taskBlock(trueOrFalse) {
  var task = false; // Using let to declare variables with block scope
  var task2 = true; // Using let to declare variables with block scope

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}