import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor({ name, card }) {
    this.name = name;
    this.card = card;
  }
}
