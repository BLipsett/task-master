import { generateId } from "../Utils/generateId.js";

export class Card {
  constructor({ title, cardColor, taskCount, id }) {
    this.id = id || generateId();
    this.title = title;
    this.cardColor = cardColor;
    this.taskCount = 0;
  }
}
