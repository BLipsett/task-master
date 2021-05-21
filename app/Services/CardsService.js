import { ProxyState } from "../AppState.js";
import { Card } from "../Models/Card.js";

class CardsService {
  constructor() {}
  addTodo(todoItem) {
    ProxyState.cards = [...ProxyState.cards, new Card(todoItem)];
    console.log(ProxyState.cards);
  }
}

export const cardsService = new CardsService();
