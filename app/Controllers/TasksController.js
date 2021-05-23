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
    let name = form.task.value;

    name.length > 3 && name.length < 50
      ? tasksService.addTask(newTask)
      : alert("task body must be more than 3 and less than 50 characters");
  }

  removeTask(event, task) {
    console.log(task);
    event.preventDefault();
    if (window.confirm("Do you want to remove?")) {
      tasksService.removeTask(task);
    }
  }

  setCheck(event, taskId) {
    event.preventDefault();
    let checkBox = document.getElementById("taskComplete");
    if (checkBox.checked) {
      console.log(checkBox.value);
    } else {
      console.log("uncheck");
    }
    tasksService.setCheck(taskId);
  }

  unCheck(event, taskId) {
    event.preventDefault();
    let checkBox = document.getElementById("taskComplete");

    tasksService.unCheck(taskId);
  }

  checkBox(taskId) {
    let checkBox = document.getElementById(taskId);
    if (checkBox.checked) {
      console.log("im checked");
      tasksService.checkBox(taskId);
      checkBox.setAttribute("checked", "checked");
    } else {
      console.log("no checked");
      tasksService.unCheckBox(taskId);
      checkBox.removeAttribute("checked");
    }
  }
}
