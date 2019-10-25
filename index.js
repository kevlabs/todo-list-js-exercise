const Task = function(title, description) {
  this.title = title;
  this.description = description;
  this.complete = false;
};

Object.assign(Task.prototype, {
  logState() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  },
  markCompleted() {
    this.complete = true;
  }
});

// DRIVER CODE CHANGES BELOW

const task1 = new Task("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = new Task("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
