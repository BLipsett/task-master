import { ProxyState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";
import { loadState } from "../Utils/localStorage.js";

function _drawCard() {
  let template = "";

  let card = ProxyState.cards;

  card.forEach((card) => {
    let tasks = ProxyState.tasks.filter((t) => t.card == card.id);
    template += `
          <div class="col-lg-3">
            <div class="card p-2 my-3">
              <div class="card-body">
                <div class="card-header">
                  <h4 class="card-title">${card.title}</h4>
                  <p>${card.taskCount}
                  </div>
                  `;

    tasks.forEach((t) => {
      console.log(t);
      template += `
                    <div>
                    <p>${t.name}<p>
                    </div>
                    `;
    });
    template += `
                  </div>
                  
                  <form onsubmit="app.tasksController.addTask(event,'${card.id}')">
                  <label for="add-task"></label>
                  <input placeholder="new task" class="form-control" name="task" type="text" />
                  <button class="btn btn-success">add</button>
                  </form>
                  </div>
       </div>
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
    ProxyState.on("tasks", _drawCard);
    loadState();
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
