import {CategoryDAO} from "../interface/CategoryDAO";
import {Observable, of, throwError} from "rxjs";
import {Category} from "../../models/Category";
import {TestData} from "../../dataGeneration/TestData";

export class CategoryDAOImpl implements CategoryDAO {

  add(arg0: Category): Observable<Category> {
    return throwError(() => new Error('Failed to add category'));
  }

  delete(id: number): Observable<Category> {
    return throwError(() => new Error('Failed to add category'));
  }

  getAll(): Observable<Category[]> {
    return of(TestData.categories);
  }

  getById(id: number): Observable<Category> {
    const foundCategory = TestData.categories.find(task => task.id === id);
    return foundCategory ? of(foundCategory) : throwError(() => new Error('Category not found'));
  }

  searchByTitle(title: string): Observable<Category[]> {
    return throwError(() => new Error('Failed to add category'));
  }

  update(arg0: Category): Observable<Category> {
    return throwError(() => new Error('Failed to add category'));
  }
}
