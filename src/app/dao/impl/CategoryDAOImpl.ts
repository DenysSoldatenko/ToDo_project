import {CategoryDAO} from "../interface/CategoryDAO";
import {Observable} from "rxjs";
import {Category} from "../../models/Category";

export class CategoryDAOImpl implements CategoryDAO {

  add(arg0: Category): Observable<Category> {
    return undefined;
  }

  delete(id: number): Observable<Category> {
    return undefined;
  }

  getAll(): Observable<Category[]> {
    return undefined;
  }

  getById(id: number): Observable<Category> {
    return undefined;
  }

  searchByTitle(title: string): Observable<Category[]> {
    return undefined;
  }

  update(arg0: Category): Observable<Category> {
    return undefined;
  }
}
