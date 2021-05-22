import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor({ name, card, id }) {
    this.name = name;
    this.card = card;
    this.id = id || generateId();
  }
}
