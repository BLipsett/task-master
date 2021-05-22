import { ProxyState } from "../AppState.js";
import { Card } from "../Models/Card.js";
import { Task } from "../Models/Task.js";

export function saveState() {
  localStorage.setItem(
    "Todo-Item",
    JSON.stringify({
      cards: ProxyState.cards,
      tasks: ProxyState.tasks,
    })
  );
  console.log(ProxyState);
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem("Todo-Item"));
  console.log(data);
  if (data != null) {
    ProxyState.cards = data.cards.map((c) => new Card(c));
    ProxyState.tasks = data.tasks.map((t) => new Task(t));
  }
}
