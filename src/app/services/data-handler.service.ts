import {Injectable} from '@angular/core';
import {Category} from "../models/Category";
import {TestData} from "../dataGeneration/TestData";
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): Category[]{
    return TestData.categories;
  }

  getTasks(): Task[]{
    return TestData.tasks;
  }

  getTasksByCategory(category: Category): Task[] {
    return TestData.tasks.filter(task => task.category === category);
  }
}
