import {Observable} from 'rxjs';
import {CommonDAO} from "./CommonDao";
import {Category} from "../../models/Category";

export interface CategoryDAO extends CommonDAO<Category> {

  searchByTitle(title: string): Observable<Category[]>;
}
