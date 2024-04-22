export default function taskBlock(trueOrFalse) {
  let task = false; // Using let to declare variables with block scope
  let task2 = true; // Using let to declare variables with block scope

  if (trueOrFalse) {
    let task = true; // No need to redeclare with let, just assign the value
    let task2 = false; // No need to redeclare with let, just assign the value
  }

  return [task, task2];
}