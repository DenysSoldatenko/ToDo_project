import {Injectable} from '@angular/core';
import {Task} from "../models/Task";
import {Observable} from "rxjs";
import {TaskDAOImpl} from "../dao/impl/TaskDAOImpl";
import {CategoryDAOImpl} from "../dao/impl/CategoryDAOImpl";
import {Category} from "../models/Category";
import {Priority} from "../models/Priority";

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

  public searchTasks(
    category: Category,
    searchText: string | null = null,
    status: boolean | null = null,
    priority: Priority | null = null
  ) {
    return this.taskDao.searchByCriteria(category, searchText, status, priority);
  }

  updateTask(task: Task): Observable<Task> {
    return this.taskDao.update(task);
  }
}
