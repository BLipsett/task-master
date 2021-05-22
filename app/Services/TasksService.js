import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  constructor() {}

  addTask(newTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(newTask)];
    console.log(ProxyState.tasks);
  }
}

export const tasksService = new TasksService();
