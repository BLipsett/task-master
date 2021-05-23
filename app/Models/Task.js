import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor({ name, card, isComplete, taskTotal, id }) {
    this.name = name;
    this.card = card;
    this.isComplete = false;
    this.taskTotal = 0;
    this.id = id || generateId();
  }
}
