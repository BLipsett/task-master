import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  constructor() {}

  addTask(newTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)];
    console.log(ProxyState.tasks);
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
}

export const tasksService = new TasksService();
