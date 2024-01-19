import {CommonDAO} from "./CommonDao";
import {Category} from "../../models/Category";
import {Task} from "../../models/Task";
import {Observable} from "rxjs";
import {Priority} from "../../models/Priority";

export interface TaskDAO extends CommonDAO<Task> {

  searchByCriteria(
    category: Category,
    searchText: string | null,
    status: boolean | null,
    priority: Priority | null
  ): Observable<Task[]>;

  getCompletedCount(category: Category): Observable<number>;

  getUncompletedCount(category: Category): Observable<number>;

  getTotalCount(category: Category): Observable<number>;

  getTotalCount(): Observable<number>;
}
