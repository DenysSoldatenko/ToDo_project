import {PriorityDAO} from "../interface/PriorityDAO";
import {Observable, throwError} from "rxjs";
import {Priority} from "../../models/Priority";

export class PriorityDAOImpl implements PriorityDAO {
  add(arg0: Priority): Observable<Priority> {
    return throwError(() => new Error('Failed to add priority'));
  }

  delete(id: number): Observable<Priority> {
    return throwError(() => new Error('Failed to add priority'));
  }

  getAll(): Observable<Priority[]> {
    return throwError(() => new Error('Failed to add priority'));
  }

  getById(id: number): Observable<Priority> {
    return throwError(() => new Error('Failed to add priority'));
  }

  update(arg0: Priority): Observable<Priority> {
    return throwError(() => new Error('Failed to add priority'));
  }

}
