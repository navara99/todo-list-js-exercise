const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask :function() {
      this.complete = true;
    },
  };
  return task;
};

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😭"); // task 1

const tasks = [task1, task2];

console.log(tasks);

task1.logTaskState();
task1.completeTask();
task1.logTaskState();
