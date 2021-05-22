import { ProxyState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";

function _drawCard() {
  console.log("start draw");
  let template = "";

  let card = ProxyState.cards;

  card.forEach((card) => {
    console.log("hopefullly", card);
    let tasks = ProxyState.tasks.filter((t) => t.card == card.id);
    template += `
          <div class="col-lg-3">
          <div class="card">
          <div class="card-body">
          <div class="card-header">
          <h4 class="card-title">${card.title}</h4>
          <p>${card.taskCount}
          </div>`;

    tasks.forEach((t) => t);

    template += `
          <p></p>
          </div>
          </div>
          <form onsubmit="app.tasksController.addTask(event, '${card.id}')">
          <label for="add-task"></label>
          <input placeholder="new task" name="task" id="" type="text" />
          <button class="btn btn-success">add</button
          </form>
          </div>
          `;
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
}
