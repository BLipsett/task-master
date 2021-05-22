import { tasksService } from "../Services/TasksService.js";

export class TasksController {
  constructor() {}

  addTask(event, card) {
    event.preventDefault();

    let form = event.target;

    let newTask = {
      name: form.task.value,
      card: card,
    };

    tasksService.addTask(newTask);
  }
}
