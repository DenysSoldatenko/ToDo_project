import {Injectable} from '@angular/core';
import {Task} from "../models/Task";
import {Observable} from "rxjs";
import {TaskDAOImpl} from "../dao/impl/TaskDAOImpl";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskDao = new TaskDAOImpl();

  getAllTasks(): Observable<Task[]> {
    return this.taskDao.getAll();
  }
}
