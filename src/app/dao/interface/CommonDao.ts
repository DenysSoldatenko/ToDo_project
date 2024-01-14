import {Observable} from 'rxjs';

export interface CommonDAO<T> {

  getAll(): Observable<T[]>;

  getById(id: number): Observable<T>;

  update(arg0: T): Observable<T>;

  delete(id: number): Observable<T>;

  add(arg0: T): Observable<T>;
}
