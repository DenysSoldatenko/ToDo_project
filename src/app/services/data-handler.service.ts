import {Injectable} from '@angular/core';
import {Task} from "../models/Task";
import {BehaviorSubject, Observable} from "rxjs";
import {TaskDAOImpl} from "../dao/impl/TaskDAOImpl";
import {CategoryDAOImpl} from "../dao/impl/CategoryDAOImpl";
import {Category} from "../models/Category";
import {TestData} from "../dataGeneration/TestData";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskDao = new TaskDAOImpl();
  categoryDao = new CategoryDAOImpl();

  getAllTasks(): Observable<Task[]> {
    return this.taskDao.getAll();
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDao.getAll();
  }
}
