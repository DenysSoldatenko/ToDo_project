import {CategoryDAO} from "../interface/CategoryDAO";
import {Observable, throwError} from "rxjs";
import {Category} from "../../models/Category";

export class CategoryDAOImpl implements CategoryDAO {

  add(arg0: Category): Observable<Category> {
    return throwError(() => new Error('Failed to add category'));
  }

  delete(id: number): Observable<Category> {
    return throwError(() => new Error('Failed to add category'));
  }

  getAll(): Observable<Category[]> {
    return throwError(() => new Error('Failed to add category'));
  }

  getById(id: number): Observable<Category> {
    return throwError(() => new Error('Failed to add category'));
  }

  searchByTitle(title: string): Observable<Category[]> {
    return throwError(() => new Error('Failed to add category'));
  }

  update(arg0: Category): Observable<Category> {
    return throwError(() => new Error('Failed to add category'));
  }
}
