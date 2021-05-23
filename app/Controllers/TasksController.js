import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

export class TasksController {
  constructor() {}

  addTask(event, card) {
    event.preventDefault();
    console.log(card);
    let form = event.target;
    let newTask = {
      name: form.task.value,
      card: card,
    };

    tasksService.addTask(newTask);
  }

  removeTask(event, task) {
    console.log(task);
    event.preventDefault();
    window.confirm("Do you want to remove?");

    tasksService.removeTask(task);
  }

  setCheck(event, taskId) {
    event.preventDefault();
    let checkBox = document.getElementById("checkMe");
    if (checkBox.checked) {
      console.log(checkBox.value);
    } else {
      console.log("uncheck");
    }
    tasksService.setCheck(taskId);
  }

  unCheck(event, taskId) {
    event.preventDefault();
    let checkBox = document.getElementById("checkMe");

    tasksService.unCheck(taskId);
  }
}
