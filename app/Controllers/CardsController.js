import { ProxyState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState } from "../Utils/localStorage.js";

function _drawCard() {
  let template = "";

  let card = ProxyState.cards;

  card.forEach((card) => {
    let tasks = ProxyState.tasks.filter((t) => t.card == card.id);
    template += /*html*/ `
          <div class="col-lg-3">
            <div class="card p-2 my-3">
              <div class="card-body">
                    <button id="delete-task" onclick="app.cardsController.removeCard(event, '${card.id}')" class="fas fa-trash"></button>

                <div class="card-header" style="background-color: ${card.cardColor}">
                  <h4 class="card-title">${card.title}</h4>
                  `;

    tasks.forEach((t) => {
      let amount = tasks.length;

      //console.log("num of tasks is", t);

      template += /*html*/ `
                  <p> of ${amount}<p>
                  </div>
                    <div id="checkMe">      
              <label for="exampleCheck1">
                    <input type="checkbox" class="taskComplete" id="taskComplete" onclick="app.tasksController.setCheck(event, '${t.id}')"/>
                    </label>
                  
                    <ul>
                    <li>
                    <p>${t.name}<p>
                    <button id="delete-task" onclick="app.tasksController.removeTask(event, '${t.id}')" class="fas fa-trash"></button>
                    </li>
                    </ul>
                    </div>
                    `;
    });
    template += /*html*/ `
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
  _drawCheckBox();
}

function _drawCheckBox() {
  ProxyState.tasks.forEach((t) => {
    if (t.isComplete == true) {
      console.log("closer");
      let dumbThing = (document.getElementById("checkMe").innerHTML = /*html*/ `
      <label for="exampleCheck1">So Done
      <input type="checkbox" class="taskComplete" id="taskComplete" onclick="app.tasksController.unCheck(event, '${t.id}')" checked/>
      </label>
      `);
    } else {
      _drawCard;
    }
  });
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
      cardColor: form.cardColor.value,
    };
    cardsService.addTodo(todoItem);
    ProxyState.on("cards", _drawCard);
  }

  removeCard(event, cardId) {
    event.preventDefault();
    cardsService.removeCard(cardId);
  }
}
