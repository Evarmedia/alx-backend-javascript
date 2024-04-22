export default function taskBlock(trueOrFalse) {
  const task = false; // Using let to declare variables with block scope
  const task2 = true; // Using let to declare variables with block scope

  if (trueOrFalse) {
    const task = true; // No need to redeclare with let, just assign the value
    const task2 = false; // No need to redeclare with let, just assign the value
  }

  return [task, task2];
}