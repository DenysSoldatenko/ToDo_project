import {TaskDAO} from "../interface/TaskDAO";
import {Task} from "../../models/Task";
import {Observable} from "rxjs";
import {Category} from "../../models/Category";
import {Priority} from "../../models/Priority";

export class TaskDAOImpl implements TaskDAO{
  add(arg0: Task): Observable<Task> {
    return undefined;
  }

  delete(id: number): Observable<Task> {
    return undefined;
  }

  getAll(): Observable<Task[]> {
    return undefined;
  }

  getById(id: number): Observable<Task> {
    return undefined;
  }

  getCompletedCount(category: Category): Observable<number> {
    return undefined;
  }

  getTotalCount(category: Category): Observable<number>;

  getTotalCount(): Observable<number>;

  getTotalCount(category?: Category): Observable<number> {
    return undefined;
  }

  getUncompletedCount(category: Category): Observable<number> {
    return undefined;
  }

  searchByCriteria(criteria: {
    category: Category;
    searchText: string;
    status: boolean;
    priority: Priority
  }): Observable<Task[]> {
    return undefined;
  }

  update(arg0: Task): Observable<Task> {
    return undefined;
  }
}
