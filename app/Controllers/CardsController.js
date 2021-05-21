import { ProxyState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";
import { tasksService } from "../Services/TasksService.js";

function _drawCard() {
  console.log("start draw");
  let template = "";

  let card = ProxyState.cards;

  card.forEach((card) => {
    let tasks = ProxyState.tasks;
    console.log("hopefullly", card);
    tasks.forEach((t) => {
      template += `
          <div class="col-lg-3">
          <div class="card">
          <div class="card-body">
          <div class="card-header">
          <h4 class="card-title">${card.title}</h4>
          <p>${card.taskCount}
          </div>
          <p>${t.name}<p>
          </div>
          </div>
          <form onsubmit="app.cardsController.addTask()">
          <label for="add-task"></label>
          <input placeholder="new task" name="task" id="" type="text" />
          <button class="btn btn-success">add</button
        </form>
          </div>
          `;
    });
  });

  document.getElementById("card-section").innerHTML = template;
}

export class CardsController {
  constructor() {
    let cards = ProxyState.cards;
    console.log(cards);

    ProxyState.on("cards", _drawCard);
    _drawCard();
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todoItem = {
      title: form.todo.value,
    };
    cardsService.addTodo(todoItem);
    ProxyState.on("cards", _drawCard);
  }

  addTask() {
    console.log("add a task");
  }
}
