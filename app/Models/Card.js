import { generateId } from "../Utils/generateId.js";

export class Card {
  constructor({ title, taskCount, id }) {
    this.id = id || generateId();
    this.title = title;
    this.taskCount = 0;
  }
}
