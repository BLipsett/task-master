import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  constructor() {}

  addTask(newTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)];
  }

  removeTask(task) {
    ProxyState.tasks = ProxyState.tasks.filter((t) => t.id != task);
    console.log(ProxyState.tasks);
  }

  setCheck(taskId) {
    let found = ProxyState.tasks.find((t) => t.id == taskId);
    found.isComplete = true;
    console.log(found.isComplete);
    ProxyState.tasks = ProxyState.tasks;
    console.log("is checked?", ProxyState.tasks);
  }

  unCheck(taskId) {
    let found = ProxyState.tasks.find((t) => t.id == taskId);
    found.isComplete = false;
    ProxyState.tasks = ProxyState.tasks;
    console.log("please be false", ProxyState.tasks);
  }

  checkBox(taskId) {
    let found = ProxyState.tasks.find((t) => t.id == taskId);

    found.isComplete = true;
    found.taskTotal++;
    //ProxyState.tasks = ProxyState.tasks;
    console.log(ProxyState.tasks);
  }

  unCheckBox(taskId) {
    let found = ProxyState.tasks.find((t) => t.id == taskId);
    found.isComplete = false;
    found.taskTotal--;
    //ProxyState.tasks = ProxyState.tasks;
    console.log("set to false", ProxyState.tasks);
  }
}

export const tasksService = new TasksService();
