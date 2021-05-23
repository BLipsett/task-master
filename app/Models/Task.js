import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor({ name, card, isComplete, id }) {
    this.name = name;
    this.card = card;
    this.isComplete = isComplete;
    this.id = id || generateId();
  }
}
