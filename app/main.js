import ValuesController from "./Controllers/ValuesController.js";
import { CardsController } from "./Controllers/CardsController.js";
import { TasksController } from "./Controllers/TasksController.js";

class App {
  valuesController = new ValuesController();
  cardsController = new CardsController();
  tasksController = new TasksController();
}
window["app"] = new App();
