import {TaskDAO} from "../interface/TaskDAO";
import {Task} from "../../models/Task";
import {Observable, of, throwError} from "rxjs";
import {Category} from "../../models/Category";
import {Priority} from "../../models/Priority";
import {TestData} from "../../dataGeneration/TestData";

export class TaskDAOImpl implements TaskDAO {
  add(arg0: Task): Observable<Task> {
    return throwError(() => new Error('Failed to add task'));
  }

  delete(id: number): Observable<Task> {
    return throwError(() => new Error('Failed to add task'));
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getById(id: number): Observable<Task> {
    const foundTask = TestData.tasks.find(task => task.id === id);
    return foundTask ? of(foundTask) : throwError(() => new Error('Task not found'));
  }

  getCompletedCount(category: Category): Observable<number> {
    return throwError(() => new Error('Failed to add task'));
  }

  getTotalCount(category: Category): Observable<number>;

  getTotalCount(): Observable<number>;

  getTotalCount(category?: Category): Observable<number> {
    return throwError(() => new Error('Failed to add task'));
  }

  getUncompletedCount(category: Category): Observable<number> {
    return throwError(() => new Error('Failed to add task'));
  }

  searchByCriteria(
    category: Category,
    searchText: string | null,
    status: boolean | null,
    priority: Priority | null
  ): Observable<Task[]> {
    return of(this.searchTasks(category, searchText, status, priority));

  }

  private searchTasks(
    category: Category,
    searchText: string | null,
    status: boolean | null,
    priority: Priority | null
  ): Task[] {

    let allTasks = TestData.tasks;

    if (category != null) {
      allTasks = allTasks.filter(todo => todo.category === category);
    }

    return allTasks;
  }


  update(arg0: Task): Observable<Task> {
    return throwError(() => new Error('Failed to add task'));
  }
}
