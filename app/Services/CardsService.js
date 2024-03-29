import { ProxyState } from "../AppState.js";
import { Card } from "../Models/Card.js";
import { saveState } from "../Utils/localStorage.js";

class CardsService {
  constructor() {
    ProxyState.on("cards", saveState);
    ProxyState.on("tasks", saveState);
  }
  addTodo(todoItem) {
    ProxyState.cards = [...ProxyState.cards, new Card(todoItem)];
    console.log(ProxyState.cards);
  }

  removeCard(cardId) {
    ProxyState.cards = ProxyState.cards.filter((c) => c.id != cardId);
  }
}

export const cardsService = new CardsService();
