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
      // click func to set state // onclick="app.tasksController.setCheck(event, '${t.id}')"

      template += /*html*/ `
      <p> ${t.taskTotal} of ${amount}<p>
      </div>
      <div id="checkMe">    
      <form>  
      <label for="taskComplete">
      <input type="checkbox" name="taskComplete" id='${t.id}' onclick="app.tasksController.checkBox('${t.id}')"/>
      </label>
      </form>
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
    <input placeholder="new task" class="form-control" name="task" type="text" id="addTask" required/>
    <button class="btn btn-success">add</button>
    </form>
    </div>
    </div>
    </div>
    `;
  });
  document.getElementById("card-section").innerHTML = template;
}

// function _drawCheckBox() {
//   console.log("draw box");
//   ProxyState.cards.forEach((card) => {
//     let tasks = ProxyState.tasks.filter((t) => t.card == card.id);
//     tasks.forEach((t) => {
//       if (t.isComplete == true) {
//         console.log("closer", t.id);
//         let dumbThing = (document.getElementById(
//           "taskComplete"
//         ).innerHTML = /*html*/ `
//         <label for="truthy-checkbox">So Done
//         <input checked type="checkbox" class="taskComplete" id="truthyCheckbox" onclick="app.tasksController.unCheck(event, '${t.id}')" checked/>
//         </label>
//         `);
//       }
//     });
//   });
// }

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

    let title = form.todo.value;
    console.log(title);
    let todoItem = {
      title: form.todo.value,
      cardColor: form.cardColor.value,
    };

    title.length > 3 && title.length < 15
      ? cardsService.addTodo(todoItem)
      : alert("title must be more than 3 and less than 15 characters");
    ProxyState.on("cards", _drawCard);
  }

  removeCard(event, cardId) {
    event.preventDefault();
    if (window.confirm("Do you want to remove?")) {
      cardsService.removeCard(cardId);
    }
  }
}
